package com.fst.FinalProjectFSTeams.service;

import com.fst.FinalProjectFSTeams.entities.Attendance;
import com.fst.FinalProjectFSTeams.entities.Holiday;
import com.fst.FinalProjectFSTeams.repository.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<Holiday> readHoliday(){
        return holidayRepository.findAll();
    }

    @Override
    public void deleteHolidays(String holidayId){
        String[] strArray = holidayId.split(",");
        int[] array =  new int[strArray.length];

        for( int i = 0; i < strArray.length; i++){
            array[i] = Integer.parseInt(strArray[i]);
            holidayRepository.deleteById(array[i]);
        }
    }
}
