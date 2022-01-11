package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.*;
import com.fst.FinalProjectFSTeams.repository.DepartmentRepository;

import java.util.List;

public interface UserService {
    
    public User saveUser(User user);
    public User updateEmployee(User user, Integer userID);
    public User disableEmployee(Integer userID);

    public void assignEmployeesToTeam(Integer teamId, String employeeIds);
    public void removeEmployeesFromTeam(Integer teamId, String employeeIds);
    public List<User> displayEmployeesFromTeam(Integer teamId);
}
