package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.*;
import com.fst.FinalProjectFSTeams.enums.Status;
import com.fst.FinalProjectFSTeams.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public User saveUser(User user, Integer teamID, Integer deptID){
        User saveuser = new User();
        saveuser.setFirstName(user.getFirstName());
        saveuser.setLastName(user.getLastName());
        saveuser.setStatus(user.getStatus());
        saveuser.setEmail(user.getEmail());
        saveuser.setRole(user.getRole());
        saveuser.setTeam(teamRepository.findById(teamID).get());
        saveuser.setDepartment(departmentRepository.findById(deptID).get());
        saveuser.setUpdateDate(user.getUpdateDate());
        saveuser.setInsertDate(user.getInsertDate());
        return userRepository.save(saveuser);
    }

    @Override
    public User updateEmployee(User user, Integer id){
        User oldUser = userRepository.findById(id).orElse(user);
        oldUser.setFirstName(user.getFirstName());
        oldUser.setLastName(user.getLastName());
        oldUser.setRole(user.getRole());
        oldUser.setEmail(user.getEmail());
        oldUser.setUpdateDate(user.getUpdateDate());
        oldUser.setStatus(user.getStatus());
        userRepository.save(oldUser);

        return oldUser;
    }

    @Override
    public User disableEmployee( Integer id){
        User oldUser = userRepository.findById(id).get();
        oldUser.setStatus(Status.INACTIVE);
        userRepository.save(oldUser);

        return oldUser;
    }

    @Override
    public void assignEmployeesToTeam(Integer teamId, String employeeIds){
        Team team = teamRepository.findById(teamId).get();
        String[] strArray = employeeIds.split(",");
        User[] user =  new User[strArray.length];
        int[] array =  new int[strArray.length];

        for( int i = 0; i < strArray.length; i++){
            array[i] = Integer.parseInt(strArray[i]);
            user[i] = userRepository.findById(array[i]).get();
            user[i].setTeam(team);
            userRepository.save(user[i]);
        }
    }
    @Override
    public void removeEmployeesFromTeam(Integer teamId, String employeeIds){
        Team team = teamRepository.findById(teamId).get(); //ss
        String[] strArray = employeeIds.split(",");
        User[] user =  new User[strArray.length];
        int[] array =  new int[strArray.length];

        for( int i = 0; i < strArray.length; i++){
            array[i] = Integer.parseInt(strArray[i]);
            user[i] = userRepository.findById(array[i]).get();
            user[i].setTeam(null);
            userRepository.save(user[i]);
        }
    }
    @Override
    public List<User> displayEmployeesFromTeam(Integer teamId){
        return userRepository.getEmployeesByTeam(teamId);
    }
    @Override
    public List<User> displayEmployeesFromDept(Integer deptId) {
        return userRepository.getEmployeesByDepartment(deptId);
    }

    @Override
    public User getUserFromEmail(String email) {
        return userRepository.getUser(email);
    }

    @Override
    public List<User> readEmployees(){
        return userRepository.findAll();
    }
    public Optional<User> readEmployeesById(Integer id){
        return userRepository.findById(id);
    }

    @Override
    public void deleteUsers(String userId){
        String[] strArray = userId.split(",");
        int[] array =  new int[strArray.length];

        for( int i = 0; i < strArray.length; i++){
            array[i] = Integer.parseInt(strArray[i]);
            User user = userRepository.findById(array[i]).get();
            user.setDepartment(null);
            user.setTeam(null);
            user.setStatus(Status.INACTIVE);
            userRepository.save(user);
        }
    }

    @Override
    public List<User> searchEmployee(String name){
        return userRepository.searchEmployee(name);
    }//ss


}
