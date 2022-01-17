import {
  HStack,
  Box,
  Center,
  Select,
  List,
  ListItem,
  VStack,
  ListIcon,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

function EmployeeCalendarList({ calendarStyle }) {
  const [holidayDates, setHolidayDates] = useState([]);
  const [month, setMonth] = useState('January');

  useEffect(() => {
    axios.get('http://localhost:8080/holiday/viewHoliday').then((response) => {
      setHolidayDates(response.data);
      console.log(response.data);
    });
  }, []);

  if (calendarStyle == 'Calendar') {
    return <Navigate to="/employees/holiday" replace={true} />;
  } else {
    return (
      <Box paddingTop={'2%'}>
        <Center>
          <VStack>
            <Center>
              <Box>
                <Select
                  size={'lg'}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}>
                  {moment.months().map((monthname) => (
                    <option key={monthname} value={monthname}>
                      {monthname}
                    </option>
                  ))}
                </Select>
              </Box>
            </Center>
            <HStack gap={5}>
              <Box
                borderRadius={50}
                bgColor={'whiteAlpha.200'}
                w={'30vw'}
                h={'40vh'}
                textAlign={'left'}
                p={'3%'}>
                <Center>
                  <Box w={'30vw'}>
                    <Center p={5}>
                      <Text fontSize={'2vw'}>Philippine Holidays</Text>
                    </Center>
                    <List gap={200}>
                      {holidayDates.map((holiday) => (
                        <Box key={holiday.id}>
                          {moment(holiday.holidayDate).format('MMMM') ==
                            month &&
                            holiday.holidayType == 'PHILIPPINES' && (
                              <ListItem fontSize={'sm'}>
                                <HStack>
                                  <ListIcon as={StarIcon} color="green.500" />
                                  <Box>
                                    {moment(holiday.holidayDate).format(
                                      'MMMM Do yyyy',
                                    )}
                                  </Box>
                                  <Box>{holiday.name}</Box>
                                </HStack>
                              </ListItem>
                            )}
                        </Box>
                      ))}
                    </List>
                  </Box>
                </Center>
              </Box>
              <Box
                borderRadius={50}
                bgColor={'whiteAlpha.200'}
                w={'30vw'}
                h={'40vh'}
                textAlign={'left'}
                p={'3%'}>
                <Center>
                  <Box w={'30vw'}>
                    <Center p={5}>
                      <Text fontSize={'2vw'}>Japan Holidays</Text>
                    </Center>
                    <List gap={200}>
                      {holidayDates.map((holiday) => (
                        <Box key={holiday.id}>
                          {moment(holiday.holidayDate).format('MMMM') ==
                            month &&
                            holiday.holidayType == 'JAPAN' && (
                              <ListItem fontSize={'sm'}>
                                <HStack>
                                  <ListIcon as={StarIcon} color="green.500" />
                                  <Box>
                                    {moment(holiday.holidayDate).format(
                                      'MMMM Do yyyy',
                                    )}
                                  </Box>
                                  <Box>{holiday.name}</Box>
                                </HStack>
                              </ListItem>
                            )}
                        </Box>
                      ))}
                    </List>
                  </Box>
                </Center>
              </Box>
            </HStack>
          </VStack>
        </Center>
      </Box>
    );
  }
}

EmployeeCalendarList.propTypes = {
  calendarStyle: PropTypes.any,
  setCalendarStyle: PropTypes.any,
};

export default EmployeeCalendarList;
