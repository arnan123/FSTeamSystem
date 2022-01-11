import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonGroup, VStack } from '@chakra-ui/react';
import CircularProgress from '../CircularProgress/CircularProgress';
import TimerButton from '../Buttons/TimerButton';

function EmployeeTime({ seconds, minutes, hours, isrunning, start, pause }) {
  const [timeinstatus, setTimeinStatus] = useState(false);
  // const [lunchBreakstatus, setLunchBreakStatus] = useState(false);
  // const [second, setSecond] = useState('');
  function handleChange(seconds, minutes, hours) {
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('hours', hours);
  }
  useEffect(() => {
    hours = localStorage.getItem('hours');
    minutes = localStorage.getItem('minutes');
    seconds = localStorage.getItem('hours');
    if (performance.navigation.type === 1) {
      console.log('This page is reloaded');
    } else {
      console.log('This page is not reloaded');
    }
    console.log(seconds);
    console.log(localStorage.getItem('seconds'));
  }, []);

  function startTimer() {
    if (isrunning) {
      setTimeinStatus(false);
      pause();
    } else {
      setTimeinStatus(true);
      start();
    }
  }

  useEffect(() => {
    hours = localStorage.getItem('hours');
    minutes = localStorage.getItem('minutes');
    seconds = localStorage.getItem('seconds');
    if (performance.navigation.type === 1) {
      start();
    } else {
      console.log('This page is not reloaded');
    }

    console.log(seconds);
  }, []);

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return (
    <Box>
      <VStack>
        <CircularProgress
          size="sm"
          thickness="5"
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          fontSize="2xl"
          label={[hours, minutes, seconds]}
          change={handleChange(seconds, minutes, hours)}
          click={startTimer}
        />

        <Box>
          <ButtonGroup>
            <TimerButton
              text={timeinstatus === false ? 'Time in' : 'TIme out'}
              size={'md'}
              click={startTimer}
              status={timeinstatus}
              description={
                timeinstatus === false
                  ? 'After Clicking this action the time will Start'
                  : 'After Clicking this action the time will End'
              }
            />
            {timeinstatus == true && (
              <TimerButton
                text="Lunch Break"
                description="After clicking this action Lunch break will start"
              />
            )}
          </ButtonGroup>
        </Box>
      </VStack>
    </Box>
  );
}

EmployeeTime.propTypes = {
  seconds: PropTypes.any,
  minutes: PropTypes.any,
  hours: PropTypes.any,
  isrunning: PropTypes.any,
  start: PropTypes.any,
  pause: PropTypes.any,
};

export default EmployeeTime;
