import React from 'react';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';
import { VStack, Spinner, Box, useMediaQuery, Center } from '@chakra-ui/react';
import Loginbutton from '../components/Login/Loginbutton';
import LoginLogo from '../components/Login/LoginLogo';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types'

function Login({isAuthenticated}) {
  const { isLoading } = useAuth0();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  if (isLoading) {
    return (
      <Box padding={'40vh'}>
        <Center>
          <Spinner size="xl" />
        </Center>
      </Box>
    );
  }
  if (isAuthenticated) {
    return <Navigate to="/employees" replace={true} />;
  } else {
    return (
      <Box textAlign="center" fontSize="xl" p={4}>
        <VStack spacing={10}>
          <Box paddingTop={isLargerThan800 ? '5%' : '15%'}>
            <VStack spacing={20} marginTop={'20%'}>
              <Helmet bodyAttributes={{ style: 'background-color :#212b3d' }} />
              <LoginLogo />
              <Loginbutton />
            </VStack>
          </Box>
        </VStack>
      </Box>
    );
  }
}

Login.propTypes={
  isAuthenticated: PropTypes.any
}

export default withAuth0(Login);
