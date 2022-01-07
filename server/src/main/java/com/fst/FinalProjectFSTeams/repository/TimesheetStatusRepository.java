package com.fst.FinalProjectFSTeams.repository;

import com.fst.FinalProjectFSTeams.entities.TimesheetStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimesheetStatusRepository extends JpaRepository <TimesheetStatus,Integer> {
}
