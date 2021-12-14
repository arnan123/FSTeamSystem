import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Icon,
  PopoverArrow,
  PopoverCloseButton,
  VStack,
  Box,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

export default function NotificationPop() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Icon as={BellIcon} w={7} h={7} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontSize={'xl'}>Notifications</PopoverHeader>
          <PopoverBody fontSize={'md'}>
            <VStack>
              <Box w={'80%'} boxShadow="md" p="6" rounded="sm" bg="white">
                hello
              </Box>
              <Box w={'80%'} boxShadow="md" p="6" rounded="sm" bg="white">
                hello
              </Box>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
