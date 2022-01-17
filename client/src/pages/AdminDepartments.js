import React,  { useEffect, useState } from 'react';
import {
  useColorModeValue,
  Box,
  SimpleGrid,
  Drawer,
  DrawerContent,
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types'
import axios from 'axios';
import Card from "../components/AdminDepartments/Card.js";
import AddModal from "../components/AdminDepartments/AddModal.js"; 
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";
import { Navigate } from 'react-router-dom';

export default function AdminDepartments(props){

  if(props.isAuthenticated==false){
    return (
      <Navigate to="/"/>
    );
  }

  const [departments,setDepartments] = useState([]);

  useEffect(() => {
    document.title="Departments";
  });

  useEffect(() => {
    axios.get("http://localhost:8080/department/view").then((response) => {
      setDepartments(response.data);
    });
  },[]);

  return (
    <ChakraProvider theme={theme}>
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
          <Sidebar onClose={props.onClose} LinkItems={props.LinkItems} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={props.onOpen} headerTitle={"Departments"}/>
      <Box
      minHeight="full"
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
      <Box display="block" py="4vh" >
        <AddModal setDepartments={setDepartments}/>
      </Box>
      <SimpleGrid minChildWidth='50vh' spacing='4vh'>
      {departments.map((department) => (
        <Card key={department.id} departments={department} setDepartments={setDepartments}/>
      ))}
      </SimpleGrid>
    </Box>
    </ChakraProvider>
  );
}

AdminDepartments.propTypes={
  onClose: PropTypes.any, isOpen: PropTypes.any, onOpen: PropTypes.any, LinkItems: PropTypes.any, isAuthenticated: PropTypes.any
}