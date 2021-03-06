package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;

import java.util.List;

public interface AttendanceService {
    public void timeIn(Integer userId );
    public void timeOut(Integer userId ,Integer attendanceId,String duration);
    public void elapsedBreak(Integer userId,Integer attendanceId, Integer duration);
    public List<Attendance> viewAttendance(Integer userId);
    public void  approveAttendanceOfEmployee(Integer userId, String attendanceIds);
    public Integer getAttendance(Integer userid);
    void updateAttendance(Integer attendanceId, Attendance attendance);
}
