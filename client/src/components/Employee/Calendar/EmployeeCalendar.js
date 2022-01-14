import React, { useEffect, useState } from 'react';
import '../Calendar/calendar.css';
import Calendar from 'react-calendar';
import {
  useDisclosure,
  Box,
  Select,
  useMediaQuery,
  VStack,
  Center,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import ModalCalendar from '../Calendar/ModalCalendar';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function EmployeeCalendar() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  // const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [calendarStyle, setCalendarStyle] = useState('Calendar');
  const [date, setDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get('http://localhost:8080/holiday/getAllHolidays')
      .then((response) => {
        setHolidays(response.data);
        console.log(response.data);
      });
  }, []);

  const onChange = (date) => {
    setDate(date);
  };

  if (calendarStyle == 'List') {
    return <Navigate to="/employees/holidayList" replace={true} />;
  } else {
    return (
      <VStack paddingLeft={isLargerThan1000 ? '15%' : ''} paddingTop={'5%'}>
        <Box>
          <Center>
            <Flex w={'70vw'}>
              <Spacer />
              <Box>
                <Select
                  placeholder="Select Style"
                  variant={'outline'}
                  bgColor={'white'}
                  color={'gray'}
                  onChange={(e) => {
                    setCalendarStyle(e.target.value);
                  }}>
                  <option value="List">List Style</option>
                  <option value="Calendar">Calendar Style</option>
                </Select>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box>
          {isLargerThan1000 ? (
            <Calendar onChange={onChange} value={date} onClickDay={onOpen} />
          ) : (
            <Center>
              <Calendar onChange={onChange} value={date} onClickDay={onOpen} />
            </Center>
          )}
        </Box>

        <ModalCalendar
          isOpen={isOpen}
          onClose={onClose}
          holidays={holidays}
          date={date}
        />
      </VStack>
    );
  }
}

export default EmployeeCalendar;
