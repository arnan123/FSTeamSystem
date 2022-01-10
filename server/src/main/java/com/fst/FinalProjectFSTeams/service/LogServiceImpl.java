package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.Log;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import com.fst.FinalProjectFSTeams.repository.LogRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@Qualifier("logService")
public class LogServiceImpl implements LogService{
    @Autowired
    private LogRepository logRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private UserRepository userRepository;
    @Override
    public void timeIn(Integer userId, String timeIn, Integer attendanceId){
        User user = userRepository.findById(userId).get();
        Attendance attendance = attendanceRepository.findById(attendanceId).get();
        Log log = new Log();


    }

    @Override
    public void timeOut(Integer userId,String timeOut,Integer logId,Integer attendanceId){
        User user = userRepository.findById(userId).get();
        Attendance attendance = attendanceRepository.findById(attendanceId).get();
        LocalDateTime date = LocalDateTime.now();
        LocalTime out = LocalTime.parse(timeOut);
        float  hours = 0;

        long x = attendance.getTimeStarted().until(out, ChronoUnit.HOURS);
        long y = attendance.getTimeStarted().until(out, ChronoUnit.MINUTES);
//        System.out.println(attendance.getElapsedBreak());
//        System.out.println(y);
        if(attendance.getElapsedBreak() <= 60){
            hours = (float)x - 1; // 1h lunchbreak
        }else{

            hours = (float)x - (attendance.getElapsedBreak()/60);
        }


//        System.out.println(hours);
        float mins = (8 - ((float)y - attendance.getElapsedBreak())/60 )*60;
//        System.out.println(mins);
        if(hours == 8){
            System.out.print("Good job!");
        }else if( hours > 8){
            System.out.print("hustle hard");
            attendance.setOverTime(mins);
        }else{
            System.out.println("Byee");
            attendance.setUnderTime(mins);
        }
        attendance.setTimeEnded(out);
        attendance.setInsertDate(date);
        attendance.setUser(user);
        attendance.setApproved(false);
        attendanceRepository.save(attendance);
    }


    @Override
    public void elapsedBreak(Integer userId,Integer logId,Integer attendanceId, Integer duration){
        User user = userRepository.findById(userId).get();
        Attendance attendance = attendanceRepository.findById(attendanceId).get();

        attendance.setUser(user);
        attendance.setElapsedBreak(duration);
        attendanceRepository.save(attendance);

    }



    @Override
    public List<Attendance> viewAttendance(Integer userId) {
        User user = userRepository.findById(userId).get();
        return attendanceRepository.viewDTR(userId);
    }




}
