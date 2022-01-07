package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.entities.User;
import com.fst.FinalProjectFSTeams.service.TeamService;
import com.fst.FinalProjectFSTeams.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private UserService userService;

    @Autowired
    private TeamService teamService;

    @PostMapping("/addEmployee")
    public void addEmployee(@RequestBody User user){
        userService.saveUser(user);
    }

    @PutMapping("/disableEmployee/{id}")
    public void disableEmployee(@PathVariable Integer id, @RequestBody User user){
        userService.disableEmployee(user,id);
    }




    @PutMapping("/assignTeam/{id}")
    @ResponseBody
    public void assignEmployeesToTeam(@PathVariable Integer id,@RequestParam String employeeIds){
        userService.assignEmployeesToTeam(id,employeeIds);
    }

    @PutMapping("/removeEmployeeFromTeam/{teamId}")
    @ResponseBody
    public void removeEmployeesFromTeam(@PathVariable Integer teamId,@RequestParam String employeeIds){
        userService.removeEmployeesFromTeam(teamId,employeeIds);
    }


}
