package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Log;

import java.util.List;

public interface LogService {
    public void createLog(Log log, Integer attendanceId, Integer userId);
    public List<Log> viewAllLogsPerDept(Integer deptId);
    public List<Log> getUserLog(Integer userId);
    List<Log> readLogs();

    void deleteLog(Integer logId);
}
