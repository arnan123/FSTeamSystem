import React,  { useEffect } from 'react';
import {
  useColorModeValue,
  Box,
  SimpleGrid,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react';
import {PropTypes} from 'prop-types';
import Card from "../components/AdminDepartments/Card.js";
import AddModal from "../components/AdminDepartments/AddModal.js"; 
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";

export default function AdminDepartments(props){
  useEffect(() => {
    document.title="Departments";
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
    <Header onOpen={props.onOpen} headerTitle="Departments"/>
    <Box
      minHeight="full"
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
      <Box display="block" py="4vh" >
        <AddModal/>
      </Box>
      <SimpleGrid minChildWidth='50vh' spacing='4vh'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </SimpleGrid>
    </Box>
    </>
  );
}


AdminDepartments.propTypes={
  onOpen: PropTypes.any, isOpen: PropTypes.any, onClose: PropTypes.any, LinkItems: PropTypes.any
}