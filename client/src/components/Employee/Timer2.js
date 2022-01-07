import React, { useState } from 'react';
import {
  Box,
  VStack,
  Grid,
  Button,
  HStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { useStopwatch } from 'react-timer-hook';

function Timer2() {
  var { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

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
    } else {
      start();
    }
  }

  function lunchBreak() {
    if (isRunning) {
      pause();
      lunchstart();
    } else if (seconds > 0) {
      start();
      lunchpause();
    }
  }

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
      <VStack gap={1}>
        <Box h={'10vh'}>
          <Button
            color={'white'}
            fontSize={'3xl'}
            leftIcon={<CalendarIcon />}
            variant={'ghost'}
            _hover={{ bgColor: ' #2a3b5e' }}>
            <Text>Time in/Out Page</Text>
          </Button>
        </Box>
        <Box>
          <VStack gap={1}>
            <HStack color={'white'}>
              <Box fontSize={'7xl'}>
                {hours} : {minutes} : {seconds}
              </Box>
            </HStack>
            <Flex gap={10}>
              <HStack color={'white'}>
                <Box fontSize={'2xl'}>
                  {lunchhours} : {lunchminutes} : {lunchseconds}
                </Box>
              </HStack>
              <HStack color={'white'}>
                <Box fontSize={'2xl'}>
                  {extendhours} : {extendminutes} : {extendseconds}
                </Box>
              </HStack>
            </Flex>
            <HStack paddingTop={10}>
              <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                <Button
                  state={isRunning}
                  color={timeInButton.color}
                  variant={'solid'}
                  onClick={startTimer}>
                  Start
                </Button>
                <Button
                  colorScheme={lunchButton.color}
                  desc={lunchButton.btn}
                  onClick={lunchBreak}
                  disabled>
                  Lunch
                </Button>
                <Button onClick={resetAll}>Reset</Button>
              </Grid>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </>
  );
}

export default Timer2;
