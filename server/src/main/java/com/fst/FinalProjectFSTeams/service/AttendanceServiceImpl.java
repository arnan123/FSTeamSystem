package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.List;

@Service
@Primary
public class AttendanceServiceImpl implements AttendanceService{
    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void timeIn(Integer userId,Attendance attendance){
        User user = userRepository.findById(userId).get();

        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
//        int  time = LocalTime.now(ZoneId.of("GMT+8")).getMinute();
        int flexTime = LocalDate.now().atTime(10,0).getMinute();

        attendance.setTimeStarted(timestamp);
        attendance.setElapsedBreak(0);
        attendance.setOverTime(0);
        attendance.setTimeEnded(null);
        attendance.setTardiness(flexTime);
        System.out.println(attendance.getTardiness());
        attendance.setUnderTime(0);
        attendance.setApproved(false);
        attendance.setUser(user);

        attendanceRepository.save(attendance);

    }

    @Override
    public void timeOut(Integer userID,Attendance attendance){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        attendance.setTimeStarted(timestamp);
        attendanceRepository.save(attendance);
    }

    @Override
    public void resumeWork(Integer userID,Attendance attendance){

    }

    @Override
    public void startLunchBreak(Integer userID,Attendance attendance){

    }

    @Override
    public void applyOvertime(Integer userID,Attendance attendance){

    }

    @Override
    public List<Attendance> viewAttendance(Integer userID) {
        User user = userRepository.findById(userID).get();
        return attendanceRepository.viewDTR(userID);
    }


}
