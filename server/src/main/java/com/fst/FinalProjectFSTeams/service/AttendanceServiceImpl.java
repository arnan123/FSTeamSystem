package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
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
        LocalDate date = LocalDate.now();
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
    public void timeOut(Integer userId , Integer attendanceId,String duration){
        User user = userRepository.findById(userId).get();
        Attendance attendance = attendanceRepository.findById(attendanceId).get();
        LocalDate date = LocalDate.now();
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

        System.out.println(duration);

//        System.out.println(out);
        attendance.setTotalTime(duration);
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
        LocalDate date = LocalDate.now();
        List<Attendance> attendanceList = attendanceRepository.viewDTR(userId);
        List<Attendance> attendance= new ArrayList<>();
        if(attendanceList.get(attendanceList.size()-1).getInsertDate().getDayOfMonth() > 5 && attendanceList.get(attendanceList.size()-1).getInsertDate().getDayOfMonth() <= 20)
        {
            for (Attendance attendances : attendanceList){
                if(attendances.getInsertDate().getDayOfMonth()>5 &&  attendances.getInsertDate().getDayOfMonth()<=20){
                    attendance.add(attendances);
                }
            }
        }

        return attendance;
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
    public Integer getAttendance(Integer userid){
        LocalDate date = LocalDate.now();

        List<Attendance> attendanceList = attendanceRepository.getAttendanceID((userid));
        Attendance attendances = new Attendance();
        for (Attendance attendance : attendanceList) {
            if(attendance.getInsertDate().getMonth() == date.getMonth() && attendance.getInsertDate().getYear()==date.getYear() && attendance.getInsertDate().getDayOfMonth()==date.getDayOfMonth()){
                attendances.setId(attendance.getId());
            }
        }
        System.out.println(attendances.getId());
        return attendances.getId();
    }

    @Override
    public void updateAttendance(Integer attendanceId, Attendance attendance){
        Attendance oldAttendance = attendanceRepository.findById(attendanceId).get();
        oldAttendance.setTimeEnded(attendance.getTimeEnded());
        oldAttendance.setElapsedBreak(attendance.getElapsedBreak());
        oldAttendance.setTardiness(attendance.getTardiness());
        oldAttendance.setOverTime(attendance.getOverTime());
        oldAttendance.setUnderTime(attendance.getUnderTime());
        oldAttendance.setTimeStarted(attendance.getTimeStarted());
        oldAttendance.setApproved(true);
        attendanceRepository.save(oldAttendance);
    }
}
