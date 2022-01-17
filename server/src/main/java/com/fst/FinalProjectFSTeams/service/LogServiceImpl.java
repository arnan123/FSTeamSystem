package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.Log;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.repository.AttendanceRepository;
import com.fst.FinalProjectFSTeams.repository.LogRepository;
import com.fst.FinalProjectFSTeams.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;

@Service

public class LogServiceImpl implements LogService{
    @Autowired
    private LogRepository logRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void createLog(Log log, Integer attendanceId, Integer userId){
        Attendance attendance = attendanceRepository.findById(attendanceId).get();
        if(attendance.isApproved()){
            attendance.setApproved(false);
        }
        User user = userRepository.findById(userId).get();
        LocalDateTime date = LocalDateTime.now();
        log.setUser(user);
        log.setInsertDate(date);
        log.setAttendance(attendance);
        logRepository.save(log);
    }
    @Override
    public List<Log> viewAllLogsPerDept(Integer deptId) {
        return logRepository.getAllLogsPerDept(deptId);
    }
    @Override
    public List<Log> readLogs() {
        return logRepository.findAll();
    }

    @Override
    public void deleteLog(Integer logId){
        Log log = logRepository.findById(logId).get();
        log.setAttendance(null);
        log.setUser(null);
        logRepository.deleteById(logId);
    }

    @Override
    public List<Log> getUserLog(Integer userId){
        return logRepository.getUserLogs(userId);
    }
}
