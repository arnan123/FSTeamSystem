import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import EmployeeCalendar from '../components/Employee/Calendar/EmployeeCalendar';
import { Helmet } from 'react-helmet';
import EmployeeSideNav from '../components/Employee/SideNav/EmployeeSideNav';
import EmployeeHeader from '../components/Employee/Header/EmployeeHeader';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import StyleSelect from '../components/Employee/Calendar/StyleSelect';
import EmployeeCalendarList from '../components/Employee/Calendar/EmployeeCalendarList';

export default function EmployeeHoliday(props) {
  const [style, setStyle] = useState('Calendar');

  if (props.isAuthenticated == false) {
    return <Navigate to="/" />;
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
        <EmployeeHeader text="HOLIDAYS" setUserData={props.setUserData} />
        <Box paddingTop={'5%'}>
          <StyleSelect style={style} setStyle={setStyle} />
          {style == 'Calendar' ? (
            <EmployeeCalendar
              calendarStyle={style}
              setCalendarStyle={setStyle}
            />
          ) : (
            <EmployeeCalendarList
              calendarStyle={style}
              setCalendarStyle={setStyle}
            />
          )}
        </Box>
      </Box>
    </>
  );
}

EmployeeHoliday.propTypes = {
  isAuthenticated: PropTypes.any,
  setUserData: PropTypes.any,
};
