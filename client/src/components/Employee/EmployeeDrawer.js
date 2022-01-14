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
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../Logo';
import { CalendarIcon, StarIcon, TimeIcon } from '@chakra-ui/icons';
import Theme from '../../utils/Theme';

export default function EmployeeDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery('(min-width: 1000px)');

  if (isLargerThan800) {
    return (
      <>
        <Box
          position={'fixed'}
          p="4"
          w={'7vw'}
          boxShadow={isLargerThan800 ? 'md' : ''}
          textAlign={'center'}
          bgColor={isLargerThan800 ? Theme.colors.company.background : ''}
          borderRadius={'xl'}
          zIndex={5}>
          <VStack spacing={6} dropShadow={'xl'}>
            <Box w={'6vw'} overflow={'hidden'}>
              <Link to={'/employees'}>
                <Logo />
                <Text fontSize={'xs'} color={'white'}>
                  FSTEAMS
                </Text>
              </Link>
            </Box>
            <Spacer />
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
                  w={'6vw'}
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
        <Box position={'sticky'} paddingLeft={'50%'}>
          <Icon
            as={HamburgerIcon}
            onClick={onOpen}
            color={'white'}
            position={'absolute'}
          />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={20}>
            <DrawerOverlay />

            <DrawerContent>
              <DrawerHeader textAlign={'right'} paddingRight={'5%'}>
                <Button onClick={onClose} variant={'ghost'}>
                  x
                </Button>
              </DrawerHeader>

              <DrawerBody paddingRight={'10%'}>
                <VStack spacing={5}>
                  <Box paddingLeft={8}>
                    <Logo maxH={'10vh'} maxW={'12vh'} />
                  </Box>
                  <Text>FSTEAMS</Text>
                  <Divider bg={'black'} />
                  <Link to={'/employees'}>
                    <Button
                      leftIcon={<TimeIcon />}
                      onClick={onClose}
                      variant={'ghost'}>
                      Time in/out
                    </Button>
                  </Link>

                  <Divider />
                  <Link to={'/employees/dtr'}>
                    <Button
                      leftIcon={<CalendarIcon />}
                      onClick={onClose}
                      variant={'ghost'}>
                      Daily Time Record
                    </Button>
                  </Link>

                  <Divider />
                  <Link to={'/employees/holiday'}>
                    <Button
                      leftIcon={<StarIcon />}
                      onClick={onClose}
                      variant={'ghost'}>
                      Holidays
                    </Button>
                  </Link>
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
