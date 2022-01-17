import { Box } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// import EmployeeCircularProgress from '../components/Employee/CircularProgress/CircularProgress';
import EmployeeTime from '../components/Employee/TimerPage/EmployeeTime';
// import { TimeIcon } from '@chakra-ui/icons';
// import EmployeeTimer from '../components/Employee/EmployeeTimer';
// import Timers from '../components/Employee/Timers';
import EmployeeSideNav from '../components/Employee/SideNav/EmployeeSideNav';
import EmployeeHeader from '../components/Employee/Header/EmployeeHeader';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function EmployeeTimeinPage(props) {
  // const [isLargerThan800] = useMediaQuery('(min-width: 1000px)');
  //   const [isLargerThan530] = useMediaQuery('(min-width: 530px)');
  const { user } = useAuth0();

  if (props.isAuthenticated == false) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/user/useremail/' + user.email)
      .then((response) => {
        props.setUserData(response.data);
        sessionStorage.setItem('user data', response.data);
      });
  }, []);

  return (
    <Box>
      <Helmet>
        <style>{` body { background-color : #2a3b5e  }`}</style>
        <title> FST Time/Out Page</title>
      </Helmet>
      <EmployeeSideNav color="gray" />
      <EmployeeHeader text="TIMER" setUserData={props.setUserData} />
      <Box>
        <EmployeeTime
          seconds={props.seconds}
          minutes={props.minutes}
          hours={props.hours}
          isrunning={props.isrunning}
          start={props.start}
          pause={props.pause}
          userData={props.userData}
          setUserData={props.setUserData}
          lunchTimer={props.lunchTimer}
        />
      </Box>
    </Box>
  );
}

EmployeeTimeinPage.propTypes = {
  seconds: PropTypes.any,
  minutes: PropTypes.any,
  hours: PropTypes.any,
  isrunning: PropTypes.any,
  start: PropTypes.any,
  pause: PropTypes.any,
  lunchTimer: PropTypes.any,
  userData: PropTypes.any,
  setUserData: PropTypes.any,
  isAuthenticated: PropTypes.any,
};
