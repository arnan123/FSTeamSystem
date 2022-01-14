package com.fst.FinalProjectFSTeams.repository;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Integer>{

    @Query(value = "SELECT * FROM attendance a WHERE a.user_id = :userId",nativeQuery = true)
    List<Attendance> viewDTR(int userId);

    @Query(value = "SELECT u.last_name,a.insert_date,a.time_started,a.time_ended,a.elapsed_break,a.total_time" +
            " FROM attendance a INNER JOIN user u ON a.user_id=u.user_id AND u.dept_id=:deptId " +
            "WHERE a.insert_date >=:startDate AND a.insert_date <=:endDate",nativeQuery = true)
    List<String> getAllAttendancePerDept(Integer deptId,String startDate, String endDate);

    @Query(value = "SELECT * FROM attendance a WHERE a.user_id = :userId",nativeQuery = true)
    List<Attendance> getAttendanceID(int userId);
}
