package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.*;
import com.fst.FinalProjectFSTeams.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private HolidayRepository holidayRepository;

    @Override
    public void timeIn(Integer userID,Attendance attendance){

    }

    @Override
    public void timeOut(Integer userID,Attendance attendance){

    }

    @Override
    public void resumeWork(Integer userID,Attendance attendance){

    }

    @Override
    public void startLunchBreak(Integer userID,Attendance attendance){

    }

    @Override
    public void applyOvertime(Integer userID,Attendance attendance){

    }

    @Override
    public void viewDTR(Integer userID,Attendance attendance){

    }






    // admin & super admin
    @Override
    public void approveOTEmployee(Integer attendanceID){
        Attendance attendance = attendanceRepository.findById(attendanceID).get();
        attendance.setApproved(true);
    }

    @Override
    public Team saveTeam(Team team){
        return teamRepository.save(team);
    }

    @Override
    public Team updateTeam(Team team, Integer teamID){
        Team oldTeam = teamRepository.findById(teamID).orElse(team);
        oldTeam.setName(team.getName());
        oldTeam.setUpdateDate(team.getUpdateDate());
        teamRepository.save(oldTeam);
        return oldTeam;
    }

    @Override
    public void deleteTeam(Integer id){
        teamRepository.deleteById(id);
    }

    @Override
    public List<Team> readTeams(){
        return teamRepository.findAll();
    }

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
    public Department saveDepartment(Department department){
        return departmentRepository.save(department);
    }

    @Override
    public Department updateDepartment(Department department, Integer deptID){
        Department oldDept = departmentRepository.findById(deptID).orElse(department);
        oldDept.setName(department.getName());
        oldDept.setType(department.getType());
        oldDept.setUpdateDate(department.getUpdateDate());
        oldDept.setActiveInd(department.isActiveInd()); // not sure if isActiveInd()
        departmentRepository.save(oldDept);
        return oldDept;
    }

    @Override
    public void deleteDepartment(Integer id){
        departmentRepository.deleteById(id);
    }

    @Override
    public Holiday saveHoliday(Holiday holiday){
        return holidayRepository.save(holiday);
    }

    @Override
    public void deleteHoliday(Integer id){
        holidayRepository.deleteById(id);
    }


}
