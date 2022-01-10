package com.fst.FinalProjectFSTeams.repository;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository <Team, Integer> {
    List<Team> findByName(String name);

    @Query(value = "SELECT * FROM team a WHERE a.dept_id = :deptId",nativeQuery = true)
    List<Team> viewTeamsPerDept(int deptId);
}
