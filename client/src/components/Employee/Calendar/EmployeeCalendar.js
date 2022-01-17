import React, { useEffect, useState } from 'react';
import '../Calendar/calendar.css';
import Calendar from 'react-calendar';
import {
  useDisclosure,
  Box,
  useMediaQuery,
  VStack,
  Center,
} from '@chakra-ui/react';
import ModalCalendar from '../Calendar/ModalCalendar';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

function EmployeeCalendar({ calendarStyle }) {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  // const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [date, setDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios.get('http://localhost:8080/holiday/viewHoliday').then((response) => {
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
      <Box paddingTop={'2%'}>
        <Center>
          <VStack>
            <Box>
              {isLargerThan1000 ? (
                <Calendar
                  onChange={onChange}
                  value={date}
                  onClickDay={onOpen}
                />
              ) : (
                <Center>
                  <Calendar
                    onChange={onChange}
                    value={date}
                    onClickDay={onOpen}
                  />
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
        </Center>
      </Box>
    );
  }
}

EmployeeCalendar.propTypes = {
  calendarStyle: PropTypes.any,
  setCalendarStyle: PropTypes.any,
};

export default EmployeeCalendar;
