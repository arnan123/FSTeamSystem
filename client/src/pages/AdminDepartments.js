import React,  { useEffect, useState } from 'react';
import {
  useColorModeValue,
  Box,
  SimpleGrid,
  Drawer,
  DrawerContent,
  useDisclosure,
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import {
  FiWatch,
  FiGrid,
  FiUsers,
  FiClock,
} from 'react-icons/fi';
import axios from 'axios';
import Card from "../components/AdminDepartments/Card.js";
import AddModal from "../components/AdminDepartments/AddModal.js"; 
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";

const LinkItems = [
  { name: 'Daily Time Record', icon: FiClock, address:"/"},
  { name: 'Departments', icon: FiGrid , address:"/departments"  },
  { name: 'Employees', icon: FiUsers, address:"/employees" },
  { name: 'Holidays', icon: FiWatch, address:"/holidays" },
];

export default function AdminDepartments(){

  const [departments,setDepartments] = useState([]);

  useEffect(() => {
    document.title="Departments";
  });

  useEffect(() => {
    axios.get("http://localhost:8080/department/view").then((response) => {
      setDepartments(response.data);
    });
  },[]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Sidebar
        onClose={() => onClose}
        LinkItems={LinkItems}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} LinkItems={LinkItems} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} headerTitle={"Departments"}/>
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
      {departments.map((department) => (
        <Card key={department.id} departments={department}/>
      ))}
      </SimpleGrid>
    </Box>
    </ChakraProvider>
  );
}