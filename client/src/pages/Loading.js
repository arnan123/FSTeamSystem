import React from 'react';
import { Spinner, Center } from '@chakra-ui/react';

export default function Loading() {

  return (
    <Center height="100vh" bg="blue.800" >
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
    </Center>
  );
}

