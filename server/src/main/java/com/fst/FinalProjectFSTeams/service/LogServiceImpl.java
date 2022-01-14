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

    public void createLog(Log log, Integer attendanceId, Integer userId){
        Attendance attendance = attendanceRepository.findById(attendanceId).get();
        User user = userRepository.findById(userId).get();
        LocalDateTime date = LocalDateTime.now();
        log.setUser(user);
        log.setInsertDate(date);
        log.setAttendance(attendance);
        logRepository.save(log);

        attendance.setTimeStarted(log.getTimeStarted());
        attendance.setElapsedBreak(log.getElapsedBreak());
        attendance.setTimeEnded(log.getTimeEnded());
        attendance.setUser(user);
        attendance.setApproved(false);
        attendance.setOverTime(log.getOverTime());
        attendance.setUnderTime(log.getUnderTime());
        attendance.setTardiness(log.getTardiness());
        attendanceRepository.save(attendance);
    }

<<<<<<< HEAD
    public List<Log> viewAllLogsPerDept(Integer deptId){
        return logRepository.getAllLogsPerDept(deptId);
=======
    @Override
    public List<Log> readLogs() {
        return logRepository.findAll();
>>>>>>> fc6fd285bdee7484c94610d4f9b24b404613cf4d
    }
}
