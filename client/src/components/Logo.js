import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import PropTypes from 'prop-types';

function Logo(props) {
  return <Image src={logo} maxW={props.maxW} maxH={props.maxH} alt="logo" />;
}

Logo.propTypes = {
  maxW: PropTypes.any,
  maxH: PropTypes.any,
};

export default Logo;
