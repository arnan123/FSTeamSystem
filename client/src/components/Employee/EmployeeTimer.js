import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useStopwatch } from 'react-timer-hook';
import { Button, Box, Grid, Text, Stack, Spacer } from '@chakra-ui/react';
import TimerButton from './timerButton';
import LunchbreakButton from './lunchbreakButton';

const Timer = () => {
  const { isAuthenticated } = useAuth0();

  var { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  var {
    seconds: lunchseconds,
    minutes: lunchminutes,
    hours: lunchhours,
    start: lunchstart,
    pause: lunchpause,
    reset: lunchreset,
  } = useStopwatch({ autoStart: false });
  var {
    seconds: extendseconds,
    minutes: extendminutes,
    hours: extendhours,
    start: extendstart,
  } = useStopwatch({ autoStart: false });

  const [timeInButton, setTimeInButton] = useState({
    btn: 'Time In',
    color: 'blue.200',
  });
  const [lunchButton, setLunchButton] = useState({
    btn: 'Lunch Break',
    color: 'blue.200',
  });

  function resetAll() {
    pause();
    lunchpause();
    reset();
    lunchreset();
    setTimeInButton({ btn: 'Lunch Break', color: 'blue.200' });
    setLunchButton({ btn: 'Lunch Break', color: 'blue.200' });
    pause();
    lunchpause();
  }

  function startTimer() {
    if (isRunning) {
      pause();
      setTimeInButton({
        btn: 'Time In',
        color: 'blue.200',
      });
    } else {
      start();
      setTimeInButton({ btn: 'Time Out', color: 'red.500' });
    }
  }

  function lunchBreak() {
    if (isRunning) {
      pause();
      lunchstart();
      setLunchButton({ btn: 'End Lunch Break', color: 'red.500' });
    } else if (lunchButton.btn === 'End Lunch Break' && seconds > 0) {
      start();
      lunchpause();
      setLunchButton({ btn: 'Lunch Break', color: 'blue.200' });
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
    isAuthenticated && (
      <>
        <Stack>
          <Box textAlign="center">
            <Grid fontSize="6xl" templateColumns="repeat(5, 1fr)" gap={3}>
              <Box>{hours}</Box>:<Box>{minutes}</Box>:<Box>{seconds}</Box>
            </Grid>
            <Text>Work Elapsed Time</Text>
          </Box>
        </Stack>
        <Stack>
          <Grid templateColumns="repeat(3, 1fr)" paddingBottom="50px">
            <Box textAlign="center">
              <Grid fontSize="xl" templateColumns="repeat(5, 1fr)" gap={3}>
                <Box>{lunchhours}</Box>:<Box>{lunchminutes}</Box>:
                <Box>{lunchseconds}</Box>
              </Grid>
              <Text fontSize="sm">Lunch Break Elapsed Time</Text>
            </Box>
            <Spacer />
            <Box textAlign="center">
              <Grid fontSize="xl" templateColumns="repeat(5, 1fr)" gap={3}>
                <Box>{extendhours}</Box>:<Box>{extendminutes}</Box>:
                <Box>{extendseconds}</Box>
              </Grid>
              <Text fontSize="sm">Extended Working Hours</Text>
            </Box>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <TimerButton
              state={isRunning}
              color={timeInButton.color}
              desc={timeInButton.btn}
              function={startTimer}
            />
            <LunchbreakButton
              color={lunchButton.color}
              desc={lunchButton.btn}
              function={lunchBreak}
            />
            <Button onClick={resetAll}>Reset</Button>
          </Grid>
        </Stack>
      </>
    )
  );
};

export default Timer;
