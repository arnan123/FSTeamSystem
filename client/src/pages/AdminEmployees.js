import React, { useEffect } from 'react';
import {
  useColorModeValue,
  Box,
  Drawer,
  DrawerContent
} from '@chakra-ui/react';
import {PropTypes} from 'prop-types';
import TableData from "../components/AdminEmployees/Table.js";
import Header from "../components/Header.js";
import AddModal from "../components/AdminEmployees/AddModal.js";
import DeleteModal from '../components/AdminEmployees/DeleteModal.js';
import Sidebar from "../components/Sidebar.js";

export default function AdminEmployees(props){
  useEffect(() => {
    document.title="Employees";
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
    <Header onOpen={props.onOpen} headerTitle="Employees"/>
    <Box
      minHeight="full"
      ml={{ base: 0, md: 60 }}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
      <Box display="block" py="4vh" >
          <AddModal/>
          <DeleteModal/>
      </Box>
      <TableData/>
    </Box>
    </>
  );
}

AdminEmployees.propTypes={
  onOpen: PropTypes.any, isOpen: PropTypes.any, onClose: PropTypes.any, LinkItems: PropTypes.any
}