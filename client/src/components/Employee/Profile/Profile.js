import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center } from '@chakra-ui/react';

function Profile(props) {
  return (
    <Center paddingTop={'5%'}>
      <Box bgColor={'black'} w={'50vw'}>
        <h2>{props.userData.firstName} hatdig</h2>
      </Box>
    </Center>
  );
}

Profile.propTypes = {
  userData: PropTypes.any,
};

export default Profile;
