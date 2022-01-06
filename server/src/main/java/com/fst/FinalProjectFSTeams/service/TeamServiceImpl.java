package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.repository.DepartmentRepository;
import com.fst.FinalProjectFSTeams.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamServiceImpl implements  TeamService{
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private DepartmentRepository departmentRepository;
    @Override
    public Team saveTeam(Team team,Integer deptId){
        team.setDepartment(departmentRepository.findById(deptId).get());
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
}
