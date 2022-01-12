package com.fst.FinalProjectFSTeams.controller;

import com.fst.FinalProjectFSTeams.entities.Department;
import com.fst.FinalProjectFSTeams.entities.Holiday;
import com.fst.FinalProjectFSTeams.service.HolidayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/holiday")
@CrossOrigin
public class HolidayController {
    @Autowired
    private HolidayService holidayService;

    @PostMapping("/addHoliday")
    public void addDepartment(@RequestBody Holiday holiday){
        holidayService.saveHoliday(holiday);
    }

    @DeleteMapping("/deleteHoliday/{holidayId}")
    public void deleteDepartment(@PathVariable Integer holidayId){
        holidayService.deleteHoliday(holidayId);
    }
    @GetMapping("/viewHolidays")
    public List<Holiday> viewHolidays(){
        return holidayService.readHolidays();
    }

}
