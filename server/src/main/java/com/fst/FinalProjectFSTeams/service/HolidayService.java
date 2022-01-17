package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Holiday;

import java.util.List;

public interface HolidayService {

    public Holiday saveHoliday(Holiday holiday);
    public void deleteHoliday(Integer id);

    public List<Holiday> readHoliday();

    public void deleteHolidays(String holidayId);
}
