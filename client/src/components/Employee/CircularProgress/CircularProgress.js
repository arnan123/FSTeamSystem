import {
  CircularProgress,
  CircularProgressLabel,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function EmployeeCircularProgress(props) {
  useEffect(() => {
    localStorage.getItem('seconds');
  }, []);

  return (
    <>
      <CircularProgress
        size={props.size}
        thickness={props.thickness}
        value={props.main == 'true' ? props.label[1] : props.label[2]}
        max={60}
        color={'blue.600'}
        onChange={props.change}>
        <CircularProgressLabel fontSize={props.fontSize}>
          <CircularProgressLabel>
            {props.main == 'true' ? (
              <CircularProgress
                size={'320px'}
                thickness={'6px'}
                value={props.label[2]}>
                <CircularProgressLabel>
                  <VStack>
                    <Text fontSize={props.fontSize}>
                      {props.label[0]} : {props.label[1]} : {props.label[2]}
                    </Text>
                    <Text fontSize={'1vw'}>{props.text}</Text>
                  </VStack>
                </CircularProgressLabel>
              </CircularProgress>
            ) : (
              <VStack>
                <Text fontSize={'2vw'}>
                  {props.label[0]} : {props.label[1]} : {props.label[2]}
                </Text>
                <Text fontSize={'1vw'}>{props.text}</Text>
              </VStack>
            )}
          </CircularProgressLabel>
        </CircularProgressLabel>
      </CircularProgress>
    </>
  );
}

EmployeeCircularProgress.propTypes = {
  size: PropTypes.any,
  thickness: PropTypes.any,
  hours: PropTypes.any,
  minutes: PropTypes.any,
  seconds: PropTypes.any,
  fontSize: PropTypes.any,
  label: PropTypes.any,
  setHoverStatus: PropTypes.any,
  hoverStatus: PropTypes.any,
  click: PropTypes.any,
  change: PropTypes.func,
  main: PropTypes.any,
  text: PropTypes.any,
};

export default EmployeeCircularProgress;
