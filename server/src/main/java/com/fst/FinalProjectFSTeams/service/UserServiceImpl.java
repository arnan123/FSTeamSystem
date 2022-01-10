package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.*;
import com.fst.FinalProjectFSTeams.enums.Status;
import com.fst.FinalProjectFSTeams.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TeamRepository teamRepository;




    @Override
    public User saveUser(User user){
        return userRepository.save(user);
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
        Team team = teamRepository.findById(teamId).get();
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

    public List<User> displayEmployeesFromTeam(Integer teamId){
        return userRepository.getEmployeesByTeam(teamId);
    }




}
