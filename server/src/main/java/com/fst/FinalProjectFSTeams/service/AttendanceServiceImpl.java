package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class AttendanceServiceImpl implements AttendanceService{
    @Autowired
    private AttendanceRepository attendanceRepository;

    @Override
    public void timeIn(Integer userID,Attendance attendance){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        attendance.setTimeStarted(timestamp);
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
    public void viewDTR(Integer userID,Attendance attendance) {

    }




        @Override
    public void approveOTEmployee(Integer attendanceID){
        Attendance attendance = attendanceRepository.findById(attendanceID).get();
        attendance.setApproved(true);
    }
}
