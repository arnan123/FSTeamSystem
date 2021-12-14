import React from 'react';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';
import { VStack, Spinner } from '@chakra-ui/react';
import Loginbutton from '../components/Login/Loginbutton';
import LoginLogo from '../components/Login/LoginLogo';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner size="xl" />;
  }
  if (isAuthenticated) {
    return <Navigate to="/employees" replace={true} />;
  } else {
    return (
      <VStack spacing={20} marginTop={40}>
        <Helmet bodyAttributes={{ style: 'background-color :#212b3d' }} />
        <LoginLogo />
        <Loginbutton />
      </VStack>
    );
  }
}

export default withAuth0(Login);
