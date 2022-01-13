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

    @PostMapping("/createLog/{attendanceId}/{userId}")
    public void createLog(@RequestBody Log log,@PathVariable Integer attendanceId,@PathVariable Integer userId){
        logService.createLog(log,attendanceId,userId);
    }

    @GetMapping("/viewLogs")
    public List<Log> readLogs(){
        return logService.readLogs();
    }

}
