import React from 'react';
import {
  useColorModeValue,
  Box,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Table from "../components/AdminDTR/Table";
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";
import {PropTypes} from 'prop-types';

function AdminDTR(props){
  useEffect(() => {
    document.title="Daily Time Record";
  });
  return (
    <>
    <Sidebar
        onClose={props.onClose}
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
    <Header onOpen={props.onOpen} headerTitle="Daily Time Record"/>
    <Box
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

AdminDTR.propTypes={
  onOpen:PropTypes.any, isOpen:PropTypes.any, onClose:PropTypes.any, LinkItems:PropTypes.any
}

export default AdminDTR;