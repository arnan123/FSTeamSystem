package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

@Service
@Primary
public class AttendanceServiceImpl implements AttendanceService{
    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void timeIn(Integer userId){
        User user = userRepository.findById(userId).get();
        Attendance attendance = new Attendance();
        LocalTime flexTime = LocalTime.parse("10:00");
        LocalTime temp = LocalTime.parse("00:00");
        LocalDateTime date = LocalDateTime.now();
        System.out.println(date.getHour()+":"+date.getMinute()+" ");
        LocalTime in = LocalTime.now();
        float result = in.compareTo(flexTime);

        if(result > 0){
            long tardiness = flexTime.until(in, ChronoUnit.MINUTES);
            float late = (float) tardiness;
            attendance.setTardiness(late);
            System.out.println("You are late about "+tardiness+"minutes");
        }else{
            System.out.println("Successfully time in");
        }

        attendance.setTimeStarted(in);
        attendance.setInsertDate(date);
        attendance.setTimeEnded(temp);
        attendance.setUser(user);
        attendance.setApproved(false);
        attendanceRepository.save(attendance);
    }

    @Override
    public void timeOut(Integer userId,String timeOut, Integer attendanceId){
        User user = userRepository.findById(userId).get();
        Attendance attendance = attendanceRepository.findById(attendanceId).get();
        LocalDateTime date = LocalDateTime.now();
        LocalTime out = LocalTime.now();
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
    public void elapsedBreak(Integer userId,Integer attendanceId, Integer duration){
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

    @Override
    public void  approveAttendanceOfEmployee(Integer userId, String attendanceIds){
        String[] strArray = attendanceIds.split(",");
        Attendance[] attendances =  new Attendance[strArray.length];
        int[] array =  new int[strArray.length];

        for( int i = 0; i < strArray.length; i++){
            array[i] = Integer.parseInt(strArray[i]);
            attendances[i] = attendanceRepository.findById(array[i]).get();
            attendances[i].setApproved(true);
            attendanceRepository.save(attendances[i]);
        }
    }



    @Override
    public String getAttendance(Integer userid){
        LocalDate date = LocalDate.now();

        List<Attendance> attendanceList = attendanceRepository.getAttendanceID((userid));
        Attendance attendances = new Attendance();
        for (Attendance attendance : attendanceList) {
            if(attendance.getInsertDate().getMonth() == date.getMonth() && attendance.getInsertDate().getYear()==date.getYear() && attendance.getInsertDate().getDayOfMonth()==date.getDayOfMonth()){
                attendances.setId(attendance.getId());
            }
        }
        System.out.println(attendances.getId());
        return date.toString();
    }
}
