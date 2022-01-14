package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.Log;

import java.util.List;

public interface LogService {
    public void createLog(Log log, Integer attendanceId, Integer userId);
<<<<<<< HEAD
    public List<Log> viewAllLogsPerDept(Integer deptId);
=======

    List<Log> readLogs();
>>>>>>> fc6fd285bdee7484c94610d4f9b24b404613cf4d
}
