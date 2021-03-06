package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Log;
import com.fst.FinalProjectFSTeams.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/log")
@CrossOrigin
public class LogController {
    @Autowired
    private LogService logService;

    @PutMapping("/createLog/{attendanceId}/{userId}")
    public void createLog(@RequestBody Log log,@PathVariable Integer attendanceId,@PathVariable Integer userId){
        logService.createLog(log,attendanceId,userId);
    }

    @GetMapping("/viewLogsPerDepartment/{deptId}")
    public List<Log> viewLogsPerDept(@PathVariable Integer deptId){
        return logService.viewAllLogsPerDept(deptId);
    }
    @GetMapping("/viewLogs")
    public List<Log> readLogs(){    
        return logService.readLogs();
    }

    @DeleteMapping("/deleteLog/{logId}")
    public void deleteLog(@PathVariable Integer logId){
        logService.deleteLog(logId);
    }

}
