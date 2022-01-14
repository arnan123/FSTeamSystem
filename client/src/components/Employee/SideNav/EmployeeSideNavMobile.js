import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Box, Spacer } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { CalendarIcon, TimeIcon, StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../Logo';

function EmployeeSideNavMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position={'absolute'} display={'block'} paddingTop={'3%'}>
      <IconButton
        variant={'ghost'}
        aria-label="Search database"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={'full'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>FSTEAMS</DrawerHeader>

          <DrawerBody>
            <VStack spacing={5}>
              <Box paddingLeft={8}>
                <Logo maxH={'20%'} maxW={'22vw'} />
              </Box>
              <Divider bg={'black'} />
              <Spacer />
              <Link to={'/employees'}>
                <Button
                  leftIcon={<TimeIcon />}
                  onClick={onClose}
                  variant={'ghost'}>
                  Time in/out
                </Button>
              </Link>

              <Link to={'/employees/dtr'}>
                <Button
                  leftIcon={<CalendarIcon />}
                  onClick={onClose}
                  variant={'ghost'}>
                  Daily Time Record
                </Button>
              </Link>

              <Link to={'/employees/holiday'}>
                <Button
                  leftIcon={<StarIcon />}
                  onClick={onClose}
                  variant={'ghost'}>
                  Holidays
                </Button>
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default EmployeeSideNavMobile;
