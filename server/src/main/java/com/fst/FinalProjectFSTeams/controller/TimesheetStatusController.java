package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.service.DepartmentService;
import com.fst.FinalProjectFSTeams.service.TimesheetStatusService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/timesheet")
@CrossOrigin
public class TimesheetStatusController {
    @Autowired
    private DepartmentService departmentService;
    @Autowired
    private TimesheetStatusService timesheetStatusService;

//    @GetMapping("/report")
//    public void readSpreadSheet() throws  IOException, GeneralSecurityException{
//        timesheetStatusService.getSpreadsheetValues();
//    }
    @PostMapping("/createReport/{deptId}")
    @ResponseBody
    public String create(@PathVariable Integer deptId,@RequestParam String startDate,@RequestParam String endDate) throws IOException, GeneralSecurityException{
        return timesheetStatusService.generateReport(startDate,endDate,deptId);
    }
}
