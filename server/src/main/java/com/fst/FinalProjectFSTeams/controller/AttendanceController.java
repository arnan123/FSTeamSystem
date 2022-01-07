package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.service.AttendanceService;
import com.fst.FinalProjectFSTeams.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
@CrossOrigin
public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;

    @Autowired
    private UserService userService;

    @PutMapping("/timeIn/{userId}")
    public void timeIn(@PathVariable Integer userId,@RequestBody Attendance attendance){
        attendanceService.timeIn(userId,attendance);
    }

    @GetMapping("/viewDTR/{userId}")
    public List<Attendance> viewDTR(@PathVariable Integer userId){
        return attendanceService.viewAttendance(userId);
    }



}
