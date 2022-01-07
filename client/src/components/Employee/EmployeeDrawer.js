import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Icon,
  VStack,
  Divider,
  Box,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../Logo';
import { CalendarIcon, StarIcon, TimeIcon } from '@chakra-ui/icons';

export default function EmployeeDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  if (isLargerThan800) {
    return (
      <>
        <Box>
          <VStack spacing={6} dropShadow={'xl'}>
            <Box w={'6vw'} overflow={'hidden'}>
              <Link to={'/employees'}>
                <Logo />
                <Text fontSize={'xs'} color={'white'}>
                  Fullspeed Technologies
                </Text>
              </Link>
            </Box>
            <Divider bgColor={'gray.400'} w={'7vw'} />
            <VStack spacing={3}>
              <Link to="/employees">
                <Button
                  _hover={{ bgGradient: 'linear(to-r, #b075ff, #37b8ff)' }}
                  w={'6vw'}
                  variant={'ghost'}>
                  <Box borderRadius={10}>
                    <TimeIcon color={'white'} />
                    <Text fontSize={'xx-small'} color="white">
                      Time In/Out
                    </Text>
                  </Box>
                </Button>
              </Link>

              <Divider bgColor={'gray'} w={'5vw'} />
              <Link to="/employees/dtr">
                <Button
                  w={'6vw'}
                  variant={'ghost'}
                  _hover={{ bgGradient: 'linear(to-r, #b075ff, #37b8ff)' }}>
                  <Box borderRadius={10}>
                    <CalendarIcon color={'white'} />
                    <Text fontSize={'xx-small'} color="white">
                      User DTR
                    </Text>
                  </Box>
                </Button>
              </Link>

              <Divider bgColor={'gray'} w={'5vw'} />
              <Link to="/employees/holiday">
                <Button
                  size={'lg'}
                  variant={'ghost'}
                  _hover={{ bgGradient: 'linear(to-r, #b075ff, #37b8ff)' }}>
                  <Box borderRadius={10}>
                    <StarIcon color={'white'} />
                    <Text fontSize={'xx-small'} color="white">
                      Holiday
                    </Text>
                  </Box>
                </Button>
              </Link>
            </VStack>
          </VStack>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box position={'sticky'}>
          <Icon
            as={HamburgerIcon}
            onClick={onOpen}
            color={'white'}
            position={'sticky'}
          />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={20}>
            <DrawerOverlay />

            <DrawerContent paddingRight={'10%'}>
              <DrawerHeader textAlign={'right'}>
                <Button onClick={onClose} variant={'ghost'}>
                  x
                </Button>
              </DrawerHeader>

              <DrawerBody>
                <VStack spacing={5}>
                  <Box paddingLeft={8}>
                    <Logo maxH={'10vh'} maxW={'12vh'} />
                  </Box>
                  <Text>FULLSPEED TECHNOLOGIES</Text>
                  <Divider bg={'black'} />
                  <Button leftIcon={<Icon />} variant={'ghost'}>
                    Sample
                  </Button>
                  <Divider />
                  <Button leftIcon={<Icon />} variant={'ghost'}>
                    Sample
                  </Button>
                  <Divider />
                  <Button leftIcon={<Icon />} variant={'ghost'}>
                    Sample
                  </Button>
                  <Divider />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </>
    );
  }
}
