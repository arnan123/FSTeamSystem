package com.fst.FinalProjectFSTeams.controller;

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
    HolidayService holidayService;

    @PostMapping("/addHoliday")
    public void saveHoliday(@RequestBody Holiday holiday){
        holidayService.saveHoliday(holiday);
    }

    @GetMapping("/viewHoliday")
    public List<Holiday> readHoliday(){
        return holidayService.readHoliday();
    }

    @DeleteMapping("/deleteHoliday/{holidayId}")
    public void deleteHoliday(@PathVariable Integer holidayId){
        holidayService.deleteHoliday(holidayId);
    }

}
