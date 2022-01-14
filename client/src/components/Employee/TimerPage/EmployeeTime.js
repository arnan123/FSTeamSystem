import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ButtonGroup,
  HStack,
  useMediaQuery,
  VStack,
  useToast,
  Center,
} from '@chakra-ui/react';
import axios from 'axios';
import CircularProgress from '../CircularProgress/CircularProgress';
import TimerButton from '../Buttons/TimerButton';
// import { useAuth0 } from '@auth0/auth0-react';

function EmployeeTime({
  seconds,
  minutes,
  hours,
  isrunning,
  start,
  pause,
  lunchTimer,
  userData,
  // setUserData,
}) {
  // const { user } = useAuth0();
  const toast = useToast();
  const [attendanceID, setAttendanceID] = useState({});
  const [timeinstatus, setTimeinStatus] = useState(false);
  const [lunchBreakstatus, setLunchBreakStatus] = useState(false);
  const [isLargerThan620] = useMediaQuery('(min-width:620px)');

  useEffect(() => {
    if (isrunning) {
      setTimeinStatus(true);
    } else if (!isrunning && lunchTimer.isLunchRunning) {
      setTimeinStatus(true);
      setLunchBreakStatus(true);
    } else {
      setTimeinStatus(false);
      setLunchBreakStatus(false);
    }
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      axios
        .get('http://localhost:8080/attendance/getAttendance/' + userData.id)
        .then((response) => {
          setAttendanceID(response.data);
        });
    }
  }, [seconds]);

  function handleChange(seconds, minutes, hours) {
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('hours', hours);
  }

  const timeIn = () => {
    if (seconds === '00' && minutes === '00') {
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
    }

    setTimeinStatus(true);
    start();
  };

  const timeOut = () => {
    if (seconds > 60) {
      toast({
        title: 'Time out',
        description: 'You need at least 1 hour duration',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
    } else {
      console.log(attendanceID);
      axios
        .put(
          'http://localhost:8080/attendance/timeOut/' +
            userData.id +
            '/' +
            attendanceID +
            '/' +
            hours +
            ':' +
            minutes,
        )
        .then(() => {
          toast({
            title: 'Time out',
            description: 'Timed out successfully',
            position: 'top',
            status: 'success',
            duration: 5000,
            isClosable: false,
          });
          setTimeinStatus(false);
          pause();
        });
    }
  };

  const endLunchBreak = async () => {
    lunchTimer.lunchminutes = lunchTimer.lunchminutes / 60;
    lunchTimer.lunchhours = lunchTimer.lunchhours + lunchTimer.lunchminutes;
    axios
      .put(
        'http://localhost:8080/attendance/elapsedBreak/' +
          userData.id +
          '/' +
          attendanceID +
          '/' +
          lunchTimer.lunchseconds,
      )
      .then(() => {
        toast({
          title: 'Lunch Break',
          description: 'Lunch Break Recorded',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
      });
  };

  function startTimer() {
    if (isrunning) {
      timeOut();
    } else {
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
      endLunchBreak();
      lunchTimer.lunchPause();
      start();
    }
  }

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
        {isLargerThan620 ? (
          <>
            <HStack paddingTop={'2%'}>
              <Box>
                <CircularProgress
                  size="600px"
                  size2="520px"
                  thickness="4px"
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
            <Box paddingBottom={'10%'}>
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
          </>
        ) : (
          <VStack>
            <Box paddingTop={'7%'}>
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
            <Box>
              <Center>
                <CircularProgress
                  size="400px"
                  size2="320px"
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
              </Center>
            </Box>
            <Box>
              <VStack>
                {lunchBreakstatus == true && (
                  <CircularProgress
                    size="100px"
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
  userData: PropTypes.any,
  setUserData: PropTypes.any,
};

export default EmployeeTime;
