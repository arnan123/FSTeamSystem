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


    @GetMapping("/teams")
    public List<Team> readTeams(){
        return teamService.readTeams();
    }

    @PostMapping("/addTeam/{id}")
    public void addTeam(@PathVariable Integer id,@RequestBody Team team){
        teamService.saveTeam(team,id);
    }

    @PutMapping("/updateTeam/{id}")
    public void updateTeam(@PathVariable Integer id, @RequestBody Team team){
        teamService.updateTeam(team,id);
    }

    @DeleteMapping("/deleteTeam/{id}")
    public void deleteTeam(@PathVariable Integer id){
        teamService.deleteTeam(id);
    }


    @PutMapping("/team/{employeeIds}")
    public void assignEmployeesToTeam(@RequestBody Team team, String employeeIds){
        userService.assignEmployeesToTeam(team,employeeIds);
    }


}
