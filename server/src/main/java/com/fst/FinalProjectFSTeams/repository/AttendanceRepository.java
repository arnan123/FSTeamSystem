package com.fst.FinalProjectFSTeams.repository;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Integer>{
}
