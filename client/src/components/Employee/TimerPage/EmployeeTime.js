import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ButtonGroup,
  HStack,
  useMediaQuery,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import CircularProgress from '../CircularProgress/CircularProgress';
import TimerButton from '../Buttons/TimerButton';
import { useAuth0 } from '@auth0/auth0-react';

function EmployeeTime({
  seconds,
  minutes,
  hours,
  isrunning,
  start,
  pause,
  lunchTimer,
}) {
  const { user } = useAuth0();
  const toast = useToast();
  const id = '1';
  const [userData, setUserData] = useState();
  const [timeinstatus, setTimeinStatus] = useState(false);
  const [lunchBreakstatus, setLunchBreakStatus] = useState(false);
  const [isLargerThan620] = useMediaQuery('(min-width:620px)');
  const newDate = new Date();

  function handleChange(seconds, minutes, hours) {
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('hours', hours);
  }
  // useEffect(() => {

  // }, [])
  useEffect(() => {
    axios
      .get('http://localhost:8080/user/useremail/' + user.email)
      .then((response) => {
        setUserData(response.data);
      });

    if (newDate.getHours().toLocaleString('en-GB') == 24) {
      console.log(newDate.getHours().toLocaleString('en-GB'));
    }
  }, [hours]);

  const timeIn = () => {
    axios
      .put('http://localhost:8080/attendance/timeIn/' + userData.id)
      .then(() => {
        toast({
          title: 'Time In',
          description: 'Timed in successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
      });
  };

  const timeOut = () => {
    axios
      .put('http://localhost:8080/attendance/timeIn/' + userData.id)
      .then(() => {
        toast({
          title: 'Time In',
          description: 'Timed in successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
      });
  };

  function startTimer() {
    if (isrunning) {
      setTimeinStatus(false);
      timeOut();
      pause();
    } else {
      setTimeinStatus(true);
      start();
      timeIn();
    }
  }

  function lunchTimers() {
    if (isrunning && !lunchTimer.isLunchRunning) {
      setLunchBreakStatus(true);
      lunchTimer.lunchStart();
      pause();
    } else {
      setLunchBreakStatus(false);
      lunchTimer[5];
      lunchTimer.lunchPause();
      start();
    }
  }

  useEffect(() => {
    hours = localStorage.getItem('hours');
    minutes = localStorage.getItem('minutes');
    seconds = localStorage.getItem('seconds');
    if (performance.navigation.type === 1) {
      console.log('This page is reloaded');
    } else {
      console.log('This page is not reloaded');
    }

    if (isrunning) {
      setTimeinStatus(true);
    } else if (!isrunning && lunchTimer.isLunchRunning) {
      setTimeinStatus(true);
      setLunchBreakStatus(true);
    } else {
      setTimeinStatus(false);
      setLunchBreakStatus(false);
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
        {id}
        {isLargerThan620 ? (
          <HStack>
            <Box>
              <CircularProgress
                size="400px"
                thickness="6px"
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                fontSize="3vw"
                main="true"
                text="Work Time"
                label={[hours, minutes, seconds]}
                change={handleChange(seconds, minutes, hours)}
                click={startTimer}
              />
            </Box>
            <Box>
              <VStack>
                {lunchBreakstatus == true && (
                  <CircularProgress
                    size="200px"
                    thickness="5"
                    fontSize="1vw"
                    text="Break Time"
                    hours={lunchTimer.lunchhours}
                    minutes={lunchTimer.lunchminutes}
                    seconds={lunchTimer.lunchseconds}
                    label={[
                      lunchTimer.lunchhours,
                      lunchTimer.lunchminutes,
                      lunchTimer.lunchseconds,
                    ]}
                  />
                )}
              </VStack>
            </Box>
          </HStack>
        ) : (
          <VStack>
            <Box>
              <CircularProgress
                size="400px"
                thickness="6px"
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                fontSize="3vw"
                main="true"
                text="Work Time"
                label={[hours, minutes, seconds]}
                change={handleChange(seconds, minutes, hours)}
                click={startTimer}
              />
            </Box>
            <Box>
              <VStack>
                {lunchBreakstatus == true && (
                  <CircularProgress
                    size="200px"
                    thickness="5"
                    fontSize="1vw"
                    text="Break Time"
                    hours={lunchTimer.lunchhours}
                    minutes={lunchTimer.lunchminutes}
                    seconds={lunchTimer.lunchseconds}
                    label={[
                      lunchTimer.lunchhours,
                      lunchTimer.lunchminutes,
                      lunchTimer.lunchseconds,
                    ]}
                  />
                )}
                <Box h={'10vh'}></Box>
              </VStack>
            </Box>
          </VStack>
        )}

        <Box>
          <ButtonGroup>
            <TimerButton
              text={timeinstatus === false ? 'Time in' : 'Time out'}
              size={'md'}
              click={startTimer}
              status={timeinstatus}
              setStatus={setTimeinStatus}
              description={
                timeinstatus === false
                  ? 'After Clicking this action the time will Start'
                  : 'After Clicking this action the time will End'
              }
            />

            {timeinstatus == true && lunchBreakstatus == false && (
              <TimerButton
                text="Lunch Break"
                description="After clicking this action Lunch break will start"
                click={lunchTimers}
              />
            )}

            {lunchBreakstatus == true && (
              <TimerButton
                text="End Break"
                description="After clicking this action Lunch break will end"
                click={lunchTimers}
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
  lunchTimer: PropTypes.any,
};

export default EmployeeTime;
