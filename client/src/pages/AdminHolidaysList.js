import React, { useEffect } from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Link
} from '@chakra-ui/react';
import {PropTypes} from 'prop-types';
import Header from "../components/Header.js";
import TableData from '../components/AdminHolidays/Table.js';
import Sidebar from "../components/Sidebar.js";
import AddModal from "../components/AdminHolidays/AddModal.js";
import DeleteModal from '../components/AdminHolidays/DeleteModal.js';

export default function AdminHolidaysList(props){
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
      p="4vh"
      ml={{ base: 0, md: 60 }}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
      <Box display="block" >
        <AddModal/>
        <DeleteModal/>
      </Box>
      <Box>
        <Link px="4" href='/admin/holidays'>Calendar View</Link>
        <TableData/>
      </Box>
    </Box>
    </>
  );
}

AdminHolidaysList.propTypes={
  onOpen: PropTypes.any, isOpen: PropTypes.any, onClose: PropTypes.any, LinkItems: PropTypes.any
}