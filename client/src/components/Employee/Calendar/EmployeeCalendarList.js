import { HStack, Box, Center, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

function EmployeeCalendarList() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Box paddingLeft={isLargerThan800 ? '15%' : ''} paddingTop={'5%'}>
      <Center>
        <HStack gap={5}>
          <Box
            borderRadius={50}
            bgColor={'whiteAlpha.200'}
            w={'25vw'}
            h={'40vh'}
            textAlign={'left'}>
            <Center>Hello</Center>
          </Box>
          <Box
            borderRadius={50}
            bgColor={'whiteAlpha.200'}
            w={'25vw'}
            h={'40vh'}
            textAlign={'left'}>
            <Center>Hello</Center>
          </Box>
        </HStack>
      </Center>
    </Box>
  );
}

export default EmployeeCalendarList;
