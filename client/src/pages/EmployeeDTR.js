import React from 'react';
import {
  Box,
  Button,
  Center,
  Spacer,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';
import EmployeeTable from '../components/Employee/EmployeeTable';
import EmployeeTableMobile from '../components/Employee/EmployeeTableMobile';
import EmployeeCircularProgress from '../components/Employee/CircularProgress/CircularProgress';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function EmployeeDTR({ seconds, minutes, hours, isrunning, start, pause }) {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  function startTimer() {
    if (isrunning) {
      pause();
    } else {
      start();
    }
  }

  function setStorage() {
    localStorage.setItem('seconds', seconds);
  }
  return (
    <>
      <Helmet>
        <style>
          {`
            body {
                  background-color : #2a3b5e
                }
          `}
        </style>
        <title>FST DTR</title>
      </Helmet>
      <Box paddingTop={'5%'}>
        <Center>
          <VStack>
            <Box h={'10vh'}>
              <Button
                color={'white'}
                fontSize={'3xl'}
                leftIcon={<CalendarIcon />}
                variant={'ghost'}
                _hover={{ bgColor: ' #2a3b5e' }}>
                <Text>Daily Time Record</Text>
              </Button>
            </Box>
            {isLargerThan480 && <EmployeeTable />}
            {!isLargerThan480 && <EmployeeTableMobile />}
          </VStack>
        </Center>
        <Box>
          <Flex>
            <Spacer />
            <Link to={'/employees'} onClick={setStorage}>
              <EmployeeCircularProgress
                size="220px"
                thickness="12px"
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                fontSize="2xl"
                label={[hours, minutes, seconds]}
                click={startTimer}
              />
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

EmployeeDTR.propTypes = {
  seconds: PropTypes.any,
  minutes: PropTypes.any,
  hours: PropTypes.any,
  isrunning: PropTypes.any,
  start: PropTypes.any,
  pause: PropTypes.any,
};

export default EmployeeDTR;
