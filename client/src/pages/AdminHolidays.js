import React, { useEffect } from 'react';
import {
  Box,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent
} from '@chakra-ui/react';
import {PropTypes} from 'prop-types';
import Calendarr from "../components/AdminHolidays/Calendar.js";
import Header from "../components/Header.js";
import AddModal from "../components/AdminHolidays/AddModal.js";
import DeleteModal from '../components/AdminHolidays/DeleteModal.js';
import Sidebar from "../components/Sidebar.js";

export default function AdminHolidays(props){
  useEffect(() => {
    document.title="Holidays";
  });
  return (
    <>
    <Sidebar
        onClose={() => props.onClose}
        LinkItems={props.LinkItems}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={props.isOpen}
        placement="left"
        onClose={props.onClose}
        returnFocusOnClose={false}
        onOverlayClick={props.onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={props.onClose} />
        </DrawerContent>
      </Drawer>
    <Header onOpen={props.onOpen} headerTitle="Holidays"/>
    <Box
      ml={{ base: 0, md: 60 }}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
        <Box display="block" py="4vh" px="7vh" >
          <AddModal/>
          <DeleteModal/>
        </Box>
        <Box px="10vh">
          <Link href='/admin/holidays/list'>List View</Link>
          <Calendarr/>
        </Box>
    </Box>
    </>
  );
}

AdminHolidays.propTypes={
  onOpen: PropTypes.any, isOpen: PropTypes.any, onClose: PropTypes.any, LinkItems: PropTypes.any
}