package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.*;

import java.util.List;
import java.util.Optional;

public interface UserService {
    
    User saveUser(User user, Integer teamID, Integer deptID);
    User updateEmployee(User user, Integer userID);
    User disableEmployee(Integer userID);
    List<User> searchEmployee(String name);
    void assignEmployeesToTeam(Integer teamId, String employeeIds);
    void removeEmployeesFromTeam(Integer teamId, String employeeIds);
    List<User> displayEmployeesFromTeam(Integer teamId);
    List<User> displayEmployeesFromDept(Integer deptId);
    User getUserFromEmail(String email);

    List<User> readEmployees();

    Optional<User> readEmployeesById(Integer id);
    void deleteUsers(String userId);
}
