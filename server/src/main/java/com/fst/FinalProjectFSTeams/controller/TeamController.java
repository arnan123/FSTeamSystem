package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/team")
@CrossOrigin
public class TeamController {
    @Autowired
    private TeamService teamService;

    @GetMapping("/viewTeams")
    public List<Team> readTeams(){
        return teamService.readTeams();
    }

    @PostMapping("/addTeam/{id}")
    public void addTeam(@PathVariable Integer id, @RequestBody Team team){
        teamService.saveTeam(team,id);
    }

    @PutMapping("/updateTeam/{id}")
    @ResponseBody
    public void updateTeam(@PathVariable Integer id, @RequestBody Team team){
        teamService.updateTeam(team,id);
    }

    @DeleteMapping("/deleteTeam/{id}")
    public void deleteTeams(@PathVariable Integer id){
        teamService.deleteTeam(id);
    }

    @GetMapping("/teamsPerDept/{deptId}")
    public List<Team> viewTeamsPerDept(@PathVariable Integer deptId){
        return teamService.viewTeamsPerDept(deptId);
    }
}
