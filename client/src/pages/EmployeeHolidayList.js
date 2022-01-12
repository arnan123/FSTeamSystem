import React from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import EmployeeSideNav from '../components/Employee/SideNav/EmployeeSideNav';
import EmployeeHeader from '../components/Employee/Header/EmployeeHeader';
import EmployeeCalendarList from '../components/Employee/Calendar/EmployeeCalendarList';
function EmployeeHolidayList() {
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
        <EmployeeSideNav color="gray" />
        <EmployeeHeader text="TIMER" />
        <Box>
          <EmployeeCalendarList />
        </Box>
      </Box>
    </>
  );
}

export default EmployeeHolidayList;
