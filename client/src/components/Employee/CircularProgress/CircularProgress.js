import {
  CircularProgress,
  CircularProgressLabel,
  Text,
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
        value={props.label[2]}
        max={60}
        color="red"
        onChange={props.change}>
        <CircularProgressLabel fontSize={props.fontSize}>
          <CircularProgress
            size={'320px'}
            thickness={5}
            value={props.label[1]}
            max={60}>
            <CircularProgressLabel>
              <Text fontSize={'4xl'}>
                {props.label[0]} : {props.label[1]} : {props.label[2]}
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
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
};

export default EmployeeCircularProgress;
