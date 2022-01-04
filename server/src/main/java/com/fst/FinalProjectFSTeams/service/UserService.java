package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.*;
import com.fst.FinalProjectFSTeams.repository.DepartmentRepository;

import java.util.List;

public interface UserService {

    public void timeIn(Integer userID,Attendance attendance);
    public void timeOut(Integer userID,Attendance attendance);
    public void resumeWork(Integer userID,Attendance attendance);
    public void startLunchBreak(Integer userID,Attendance attendance);
    public void applyOvertime(Integer userID,Attendance attendance);
    public void viewDTR(Integer userID,Attendance attendance);


    public void approveOTEmployee(Integer attendanceID);
    public Team saveTeam(Team team);
    public Team updateTeam(Team team, Integer teamID);
    public void deleteTeam(Integer id);
    public List<Team> readTeams();
    public User saveUser(User user);
    public User updateEmployee(User user, Integer userID);

    public Department saveDepartment(Department department);
    public Department updateDepartment(Department department, Integer deptID);
    public void deleteDepartment(Integer id);
    public Holiday saveHoliday(Holiday holiday);
    public void deleteHoliday(Integer id);


}
