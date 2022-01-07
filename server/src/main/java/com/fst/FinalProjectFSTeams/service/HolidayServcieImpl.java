package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Holiday;
import com.fst.FinalProjectFSTeams.repository.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HolidayServcieImpl implements  HolidayService{
    @Autowired
    private HolidayRepository holidayRepository;
    @Override
    public Holiday saveHoliday(Holiday holiday){
        return holidayRepository.save(holiday);
    }

    @Override
    public void deleteHoliday(Integer id){
        holidayRepository.deleteById(id);
    }
}