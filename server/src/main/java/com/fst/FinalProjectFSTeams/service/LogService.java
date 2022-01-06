package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;

public interface LogService {
    public void timeIn(Integer userID, Attendance attendance);
    public void timeOut(Integer userID,Attendance attendance);
    public void resumeWork(Integer userID,Attendance attendance);
    public void startLunchBreak(Integer userID,Attendance attendance);
    public void applyOvertime(Integer userID,Attendance attendance);
    public void viewDTR(Integer userID,Attendance attendance);

}
