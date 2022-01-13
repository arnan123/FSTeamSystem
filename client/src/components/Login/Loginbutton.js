import { useAuth0 } from '@auth0/auth0-react';
import { Button, Text } from '@chakra-ui/react';
import React from 'react';

function Loginbutton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      w="30vh"
      h="6vh"
      colorScheme={'black'}
      _hover={{ bgGradient: 'linear(to-r, #b075ff, #37b8ff)' }}
      variant={'outline'}>
      <Text fontSize={'2vh'} color={'white'}>
        Login with Google Account
      </Text>
    </Button>
  );
}

export default Loginbutton;
