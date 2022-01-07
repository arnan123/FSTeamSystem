import { Button } from '@chakra-ui/button';
import React from 'react';
import PropTypes from 'prop-types';

function lunchbreakButton(props) {
  return (
    <>
      <Button onClick={props.function}>{props.desc}</Button>
    </>
  );
}

lunchbreakButton.propTypes = {
  desc: PropTypes.any,
  function: PropTypes.func,
};

export default lunchbreakButton;
