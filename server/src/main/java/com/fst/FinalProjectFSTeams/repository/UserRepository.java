package com.fst.FinalProjectFSTeams.repository;

import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

//    @Query("SELECT * FROM Team")
//    List<Team> readTeams();


}
