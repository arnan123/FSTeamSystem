package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
@Qualifier("logService")
public class LogServiceImpl implements AttendanceService{
    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private UserRepository userRepository;
    @Override
    public void timeIn(Integer userID, Attendance attendance){
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
    public List<Attendance> viewAttendance(Integer userID) {
        User user = userRepository.findById(userID).get();
        return attendanceRepository.viewDTR(userID);
    }



}
