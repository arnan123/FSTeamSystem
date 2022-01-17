import React,  { useEffect, useState } from 'react';
import {
  useColorModeValue,
  Box,
  Drawer,
  DrawerContent,
  ChakraProvider,
  theme,
  Grid,
  Text,
  Button,
  Center,
  useToast,
  Input,
  Select
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types'
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function GenerateReport(props){

  if(props.isAuthenticated==false){
    return (
      <Navigate to="/"/>
    );
  }

  useEffect(() => {
    document.title="Generate Reports";
  });

  const [departments,setDepartments] = useState([]);
  const [department,setDepartment] = useState("");
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const toast=useToast();

  useEffect(() => {
    axios.get("http://localhost:8080/department/view").then((response) => {
      setDepartments(response.data);
    });
  },[]);

  function generate(){
    axios.post('http://localhost:8080/timesheet/createReport/'+department+'/?startDate='+startDate+'&endDate='+endDate).then((response) => {
      toast({
        title: 'Generate Report',
        description: 'Generated report successfully',
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: false,
      });
      window.location.href="https://docs.google.com/spreadsheets/d/"+response.data+"/edit";
    });
  }

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
      <Header onOpen={props.onOpen} headerTitle={"Generate Reports"}/>
      <Box
      minHeight="full"
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <Box py="8vh" px="8vh" bg="green.100" height="88vh">
          <Text>Start Date</Text>
          <Input type="date" onChange={e=>setStartDate(e.target.value)} variant="filled"/>
          <Text>End Date</Text>
          <Input type="date" onChange={e=>setEndDate(e.target.value)} variant="filled"/>
          <Text>Department</Text>
          <Select my="4vh" placeholder="Department" variant="filled" onChange={e=>setDepartment(e.target.value)}>
            {departments.map((department)=>(
              <option key={department.id} value={department.id}>{department.name}</option>
            ))}
          </Select>
        </Box>
        <Center py="4vh">
            {(department!="" && endDate!=null && startDate!=null)?<Button onClick={generate}>Generate Report</Button>:null}
        </Center>
      </Grid>
    </Box>
    </ChakraProvider>
  );
}

GenerateReport.propTypes={
  onClose: PropTypes.any, isOpen: PropTypes.any, onOpen: PropTypes.any, LinkItems: PropTypes.any, isAuthenticated: PropTypes.any
}