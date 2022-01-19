import {
  HStack,
  Box,
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
  const [month, setMonth] = useState('Holidays');

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
          <VStack>           
              <Box>
                <Select color="white"
                  size={'lg'}
                  defaultValue={'Holidays'}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}>
                  <option value={'Holidays'}>All Holidays</option>
                  {moment.months().map((monthname) => (
                    <option key={monthname} value={monthname}>
                      {monthname}
                    </option>
                  ))}
                </Select>
              </Box>
            
            <HStack gap={5}>
              <Box overflow="auto" height="50vh" textColor="white"
                bgColor={'whiteAlpha.200'}
                w={'30vw'}
                p={'3%'}>
                  <Box w={'30vw'}>
                      <Text fontSize={'2vw'}>Philippine Holidays</Text>
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
                          {month == 'Holidays' &&
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
                  </Box>
              <Box
              overflow="auto"
                height="50vh"
                bgColor={'whiteAlpha.200'}
                w={'30vw'}
                p={'3%'}
                textColor="white">
                  <Box w={'30vw'}>
                    <Text fontSize={'2vw'}>Japan Holidays</Text>
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
                          {month == 'Holidays' &&
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
              </Box>
            </HStack>
          </VStack>      
      </Box>
    );
  }
}

EmployeeCalendarList.propTypes = {
  calendarStyle: PropTypes.any,
  setCalendarStyle: PropTypes.any,
};

export default EmployeeCalendarList;
