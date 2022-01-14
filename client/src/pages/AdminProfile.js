import React, {useEffect, useState} from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  ChakraProvider,
  theme,
  Avatar,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TableData from '../components/AdminProfile/Table';

export default function AdminProfile(props){

  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/admin/view/"+id).then((response) => {
      setEmployee(response.data);
    });
  },[]);

  useEffect(() => {
    document.title=employee.firstName+' '+employee.lastName;
  });
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
      <Header onOpen={props.onOpen} headerTitle={"Profile"}/>
    <Box
      minHeight="full"
      ml={{ base: 0, md: 60 }}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
      <Box p="10">
        <Flex justifyContent="center">
          <VStack>
          <Avatar size='2xl' name={employee.firstName + " " + employee.lastName}/>
          <Text fontSize="xl">{employee.firstName} {employee.lastName}</Text>
          <TableData id={id}/>
          </VStack>
        </Flex>
      </Box>
    </Box>
    </ChakraProvider>
  );
}

AdminProfile.propTypes={
  onClose: PropTypes.any, isOpen: PropTypes.any, onOpen: PropTypes.any, LinkItems: PropTypes.any
}