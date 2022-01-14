import React, { useState } from 'react';
import '../Calendar/calendar.css';
import Calendar from 'react-calendar';
import {
  useDisclosure,
  Box,
  Select,
  Grid,
  GridItem,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import ModalCalendar from '../Calendar/ModalCalendar';
import { Navigate } from 'react-router-dom';

function EmployeeCalendar() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  var x = '';
  const [date, setDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (date) => {
    setDate(date);
  };

  function openModal() {
    onOpen();
  }

  function getVal(e) {
    // console.log(e.target.value);
    x = e.target.value;
    console.log(x);
  }
  if (x == 'List') {
    return <Navigate to="/employees/holidayList" replace={true} />;
  } else {
    return (
      <VStack paddingLeft={isLargerThan800 ? '15%' : ''} paddingTop={'5%'}>
        <Box>
          <Grid
            templateColumns={
              isLargerThan1000 ? 'repeat(6, 1fr)' : 'repeat(3, 1fr)'
            }>
            <GridItem colStart={isLargerThan1000 ? 6 : 3}>
              <Select
                placeholder="Select Style"
                variant={'outline'}
                bgColor={'white'}
                color={'gray'}
                onChange={getVal}>
                <option value="List">List Style</option>
                <option value={'Calendar Style'}>Calendar Style</option>
              </Select>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <Calendar onChange={onChange} value={date} onClickDay={openModal} />
        </Box>
        <ModalCalendar isOpen={isOpen} onClose={onClose} />
      </VStack>
    );
  }
}

export default EmployeeCalendar;
