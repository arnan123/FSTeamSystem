package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;

import java.util.List;

public interface LogService {
    public void timeIn(Integer userId,String timeIn, Integer attendanceId);
    public void timeOut(Integer userId,String timeOut,Integer logId,Integer attendanceId);
    public void elapsedBreak(Integer userId,Integer logId,Integer attendanceId, Integer duration);
    public List<Attendance> viewAttendance(Integer userId);
}
