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

    @Query("SELECT * FROM  User WHERE firstName LIKE %?1%")
    List<User> searchEmployee(String name);

    @Query(value = "SELECT * FROM User u INNER JOIN Team t ON u.teamId = t.teamId", nativeQuery = true)
    List<User> getEmployeesByTeam(int teamId);


}
