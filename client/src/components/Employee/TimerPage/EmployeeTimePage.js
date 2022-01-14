import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Button,
  HStack,
  // Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { useStopwatch } from 'react-timer-hook';
import EmployeeCircularProgress from '../CircularProgress/CircularProgress';
import TimerButton from '../timerButton';

function Timer2() {
  // const [second] = useState(0);

  var { seconds, minutes, hours, isRunning, start, pause } = useStopwatch({
    autoStart: false,
  });
  var {
    seconds: lunchseconds,
    minutes: lunchminutes,
    hours: lunchhours,
    isRunning: isLunchRunning,
    start: lunchstart,
    pause: lunchpause,
    // reset: lunchreset,
  } = useStopwatch({ lunchautoStart: false });
  var {
    seconds: extendseconds,
    minutes: extendminutes,
    hours: extendhours,
    start: extendstart,
  } = useStopwatch({ extendautoStart: false });

  const [hoverStatus, setHoverStatus] = useState('Time in');

  const [isLargerThan920] = useMediaQuery('(min-width: 920px)');
  // const [isLargerThan790] = useMediaQuery('(min-width: 790px)');
  const handleChange = (seconds, minutes, hours) => {
    localStorage.setItem('hours', hours);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('seconds', seconds);
  };
  useEffect(() => {
    hours = localStorage.getItem('hours');
    minutes = localStorage.getItem('minutes');
    seconds = localStorage.getItem('seconds');
    if (performance.navigation.type === 1) {
      hours = localStorage.getItem('hours');
      minutes = localStorage.getItem('minutes');
      seconds = localStorage.getItem('seconds');
    } else {
      console.log('This page is not reloaded');
    }
    if (seconds > 0) {
      setHoverStatus('Elapsed');
    } else {
      setHoverStatus('Time in');
    }

    console.log(seconds);
  }, []);

  function startTimer() {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }

  function lunchBreak() {
    if (isRunning) {
      pause();
      lunchstart();
    } else if (isLunchRunning) {
      lunchpause();
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
  if (lunchhours < 10) {
    lunchhours = '0' + lunchhours;
  }
  if (lunchminutes < 10) {
    lunchminutes = '0' + lunchminutes;
  }
  if (lunchseconds < 10) {
    lunchseconds = '0' + lunchseconds;
  }
  if (extendhours < 10) {
    extendhours = '0' + extendhours;
  }
  if (extendminutes < 10) {
    extendminutes = '0' + extendminutes;
  }
  if (extendseconds < 10) {
    extendseconds = '0' + extendseconds;
  }

  if (hours === 8) {
    pause();
    extendstart();
  }
  return (
    <>
      <Box>
        <VStack gap={0}>
          <HStack color={'white'}>
            <Box fontSize={isLargerThan920 ? '8xl' : '5xl'}>
              {hoverStatus === 'Time in' && (
                <EmployeeCircularProgress
                  size="xs"
                  thickness="5px"
                  label={['Time in']}
                  fontSize="5xl"
                  setHoverStatus={setHoverStatus}
                  hoverStatus={hoverStatus}
                  click={startTimer}
                />
              )}
              {hoverStatus === 'Elapsed' && (
                <EmployeeCircularProgress
                  size="xs"
                  thickness="5px"
                  label={[hours, minutes, seconds]}
                  fontSize="5xl"
                  setHoverStatus={setHoverStatus}
                  hoverStatus={hoverStatus}
                  change={handleChange(seconds, minutes, hours)}
                />
              )}
            </Box>
            {isLunchRunning === true ? (
              <Box>
                <VStack>
                  <Box fontSize={'4xl'}>
                    {lunchhours} : {lunchminutes} : {lunchseconds}
                  </Box>
                  <Box>Lunch Time</Box>
                </VStack>
              </Box>
            ) : (
              <Box></Box>
            )}
          </HStack>

          <HStack paddingTop={10}>
            <Button state={isRunning} variant={'solid'} onClick={startTimer}>
              Time out
            </Button>
            {hoverStatus === 'Elapsed' && (
              <TimerButton
                size="md"
                color="red.500"
                text="Time Out"
                click={startTimer}
              />
            )}
            <Button
              variant={'solid'}
              onClick={lunchBreak}
              isDisabled={hoverStatus === 'Elapsed' ? false : true}>
              Lunch
            </Button>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}

export default Timer2;
