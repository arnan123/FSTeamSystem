import React from 'react';
import { Box, Button, Center } from '@chakra-ui/react';
import EmployeeCalendar from '../components/Employee/Calendar/EmployeeCalendar';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function EmployeeHoliday() {
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
        <title>FST Holidays</title>
      </Helmet>
      <Box>
        <Center>
          <Link to={'/employees'}>
            <Button>Link</Button>
          </Link>
          <EmployeeCalendar />
        </Center>
      </Box>
    </>
  );
}
