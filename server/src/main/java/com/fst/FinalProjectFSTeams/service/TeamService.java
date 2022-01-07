package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Team;

import java.util.List;

public interface TeamService {
    public Team saveTeam(Team team,Integer deptId);
    public Team updateTeam(Team team, Integer teamID);
    public void deleteTeam(Integer id);
    public List<Team> readTeams();
}
