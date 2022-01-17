import React from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import EmployeeSideNav from '../components/Employee/SideNav/EmployeeSideNav';
import EmployeeHeader from '../components/Employee/Header/EmployeeHeader';
import EmployeeCalendarList from '../components/Employee/Calendar/EmployeeCalendarList';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
export default function EmployeeHolidayList(props) {

if(props.isAuthenticated==false){
  return (
    <Navigate to="/"/>
  );
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
      <title>FST Holidays</title>
    </Helmet>
    <Box>
      <EmployeeSideNav color="gray" />
      <EmployeeHeader text="HOLIDAYS" />
      <Box>
        <EmployeeCalendarList />
      </Box>
    </Box>
  </>
);
}

EmployeeHolidayList.propTypes={
  isAuthenticated: PropTypes.any
}