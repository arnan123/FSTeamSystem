package com.fst.FinalProjectFSTeams.repository;

import com.fst.FinalProjectFSTeams.entities.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends JpaRepository <Log, Integer> {
    @Query(value = "SELECT * FROM log l INNER JOIN user u ON l.user_id = u.user_id WHERE u.dept_id= :deptId",nativeQuery = true)
    public List<Log> getAllLogsPerDept(Integer deptId);

    @Query(value = "SELECT * FROM log l  WHERE l.user_id= :userId",nativeQuery = true)
    public List<Log> getUserLogs(Integer userId);
}
