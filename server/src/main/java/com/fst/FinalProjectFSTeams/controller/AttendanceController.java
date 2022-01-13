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


    @PutMapping("/timeIn/{userId}")
    public void timeIn(@PathVariable Integer userId){
        attendanceService.timeIn(userId);
    }

    @PutMapping("/timeOut/{userId}/{attendanceId}")
    @ResponseBody
    public void timeOut(@PathVariable Integer userId,@RequestParam String timeOut,@PathVariable Integer attendanceId){
        attendanceService.timeOut(userId,timeOut,attendanceId);
    }

    @PutMapping("/elapsedBreak/{userId}/{attendanceId}/{duration}")
    public void elapsedBreak(@PathVariable Integer userId, @PathVariable Integer attendanceId, @PathVariable Integer duration){
        attendanceService.elapsedBreak(userId,attendanceId,duration);
    }

    @PutMapping("/approveDTR/{userId}")
    @ResponseBody
    public void approveDTR(@PathVariable Integer userId, @RequestParam String attendanceIds){
        attendanceService.approveAttendanceOfEmployee(userId, attendanceIds);
    }

    @GetMapping("/viewDTR/{userId}")
    public List<Attendance> viewDTR(@PathVariable Integer userId){
        return attendanceService.viewAttendance(userId);
    }

    @PostMapping("/sample/{email}")
    public String sampleFunc(@PathVariable String email){return attendanceService.samps(email);}

    @GetMapping("/getAttendance/{userid}")
    public String getAttendanceID(@PathVariable Integer userid){
        return attendanceService.getAttendance(userid);}
}
