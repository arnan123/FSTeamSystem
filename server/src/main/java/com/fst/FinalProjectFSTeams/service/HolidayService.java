package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Holiday;

public interface HolidayService {

    public Holiday saveHoliday(Holiday holiday);
    public void deleteHoliday(Integer id);
}
