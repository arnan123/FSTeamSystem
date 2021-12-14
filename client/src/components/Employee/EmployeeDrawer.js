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
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

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
                <Text fontSize={'sm'} color={'white'}>
                  Fullspeed Technologies
                </Text>
              </Link>
            </Box>
            <Divider bgColor={'gray.400'} w={'7vw'} />
            <VStack spacing={3}>
              <Button size={'lg'} variant={'solid'}>
                <Icon color={'black'} />
              </Button>
              <Divider bgColor={'gray'} w={'5vw'} />
              <Button w={20} variant={'ghost'}>
                <Icon />
              </Button>
              <Divider bgColor={'gray'} w={'5vw'} />
              <Button w={20} variant={'ghost'}>
                <Icon />
              </Button>
            </VStack>
          </VStack>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Icon as={HamburgerIcon} onClick={onOpen} />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={20}>
          <DrawerOverlay />

          <DrawerContent>
            <DrawerHeader textAlign={'right'}>
              <Button onClick={onClose}>x</Button>
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
      </>
    );
  }
}
