package com.fst.FinalProjectFSTeams.repository;

import com.fst.FinalProjectFSTeams.entities.Team;
import com.fst.FinalProjectFSTeams.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

//    @Query("SELECT * FROM Team")
//    List<Team> readTeams();

    @Query("SELECT u FROM  User u WHERE u.firstName LIKE %?1%")
    List<User> searchEmployee(String name);

    @Query(value = "SELECT * FROM User u WHERE u.team_id =:teamId", nativeQuery = true)
    List<User> getEmployeesByTeam(int teamId);

<<<<<<< HEAD
    @Query(value = "SELECT * FROM User u WHERE u.dept_id=:deptId",nativeQuery = true)
    List<User> getEmployeesByDepartment(int deptId);
=======
    @Query(value = "SELECT * FROM User u  WHERE u.email =:email", nativeQuery = true)
    User getUser(String email);
>>>>>>> fc6fd285bdee7484c94610d4f9b24b404613cf4d
}
