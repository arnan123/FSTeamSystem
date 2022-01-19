import React, { useEffect } from 'react';
import {
  useColorModeValue,
  Box,
  Drawer,
  DrawerContent
} from '@chakra-ui/react';
import {PropTypes} from 'prop-types';
import Table from "../components/AdminEmployees/Table.js";
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";
import { Navigate } from 'react-router-dom';

export default function AdminEmployees(props){
  if(props.isAuthenticated==false){
    return (
      <Navigate to="/"/>
    );
  }

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
      <Table/>
    </Box>
    </>
  );
}

AdminEmployees.propTypes={
  onOpen: PropTypes.any, isOpen: PropTypes.any, onClose: PropTypes.any, LinkItems: PropTypes.any, isAuthenticated: PropTypes.any
}