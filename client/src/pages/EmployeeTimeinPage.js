import { Box } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// import EmployeeCircularProgress from '../components/Employee/CircularProgress/CircularProgress';
import EmployeeTime from '../components/Employee/TimerPage/EmployeeTime';
// import { TimeIcon } from '@chakra-ui/icons';
// import EmployeeTimer from '../components/Employee/EmployeeTimer';
// import Timers from '../components/Employee/Timers';
import EmployeeSideNav from '../components/Employee/SideNav/EmployeeSideNav';
import EmployeeHeader from '../components/Employee/Header/EmployeeHeader';

function EmployeeTimeinPage({
  seconds,
  minutes,
  hours,
  isrunning,
  start,
  pause,
  ...lunchTimer
}) {
  // const [isLargerThan800] = useMediaQuery('(min-width: 1000px)');
  //   const [isLargerThan530] = useMediaQuery('(min-width: 530px)');

  return (
    <Box>
      <Helmet>
        <style>{` body { background-color : #2a3b5e  }`}</style>
        <title> FST Time/Out Page</title>
      </Helmet>
      <EmployeeSideNav color="gray" />
      <EmployeeHeader />
      <Box>
        <EmployeeTime
          seconds={seconds}
          minutes={minutes}
          hours={hours}
          isrunning={isrunning}
          start={start}
          pause={pause}
        />
        {lunchTimer[0]}
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
};

export default EmployeeTimeinPage;
