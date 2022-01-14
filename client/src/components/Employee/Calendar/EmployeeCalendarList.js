import {
  HStack,
  Box,
  Center,
  useMediaQuery,
  Select,
  Flex,
  Spacer,
  List,
  ListItem,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function EmployeeCalendarList() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [calendarStyle, setCalendarStyle] = useState('List');
  const [holidayDates, setHolidayDates] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/holiday/getAllHolidays')
      .then((response) => {
        setHolidayDates(response.data);
        console.log(response.data);
      });
  }, []);

  if (calendarStyle == 'Calendar') {
    return <Navigate to="/employees/holiday" replace={true} />;
  } else {
    return (
      <Box paddingLeft={isLargerThan800 ? '15%' : ''} paddingTop={'5%'}>
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
        <Center>
          <HStack gap={5}>
            <Box
              borderRadius={50}
              bgColor={'whiteAlpha.200'}
              w={'25vw'}
              h={'40vh'}
              textAlign={'left'}>
              <Center>
                <List>
                  {holidayDates.map((holiday) => (
                    <ListItem key={holiday.id}>{holiday.name}</ListItem>
                  ))}
                </List>
              </Center>
            </Box>
            <Box
              borderRadius={50}
              bgColor={'whiteAlpha.200'}
              w={'25vw'}
              h={'40vh'}
              textAlign={'left'}>
              <Center>Hello</Center>
            </Box>
          </HStack>
        </Center>
      </Box>
    );
  }
}

export default EmployeeCalendarList;
