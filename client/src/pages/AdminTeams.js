import React, { useState, useEffect } from 'react';
import {
  Box,
  useColorModeValue,
  Grid,
  Text,
  Button,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {PropTypes} from "prop-types";
import Header from "../components/Header.js";
import Breadcrumb from '../components/AdminTeams/Breadcrumbs.js';
import ListTeam from '../components/AdminTeams/ListTeam.js';
import AddModal from '../components/AdminTeams/AddModal.js';
import DeleteModal from '../components/AdminTeams/DeleteModal.js';
import EditModal from '../components/AdminTeams/EditModal.js';
import Sidebar from "../components/Sidebar.js";

export default function AdminTeams(props){

  if(props.isAuthenticated==false){
    return (
      <Navigate to="/"/>
    );
  }

  useEffect(() => {
    document.title="Teams";
  });
  const [department,setDepartment] = useState({});
  const [teams,setTeams] = useState([]);
  const [employees,setEmployees] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/department/view/"+ id).then((response) => {
      setDepartment(response.data);
    });
  },[]);

  useEffect(() => {
    axios.get("http://localhost:8080/team/teamsPerDept/"+ id).then((response) => {
      setTeams(response.data);
    });
  },[]);

  function populateEmployees(teamID){
    axios.get("http://localhost:8080/admin/viewEmployeesFromTeam/"+ teamID).then((response) => {
      setEmployees(response.data);
    });
  }


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
    <Header onOpen={props.onOpen} headerTitle={department.name}/>
    <Box
      p="4vh"
      ml={{ base: 0, md: 60 }}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
      <Breadcrumb department={department} />
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <Box py="4vh">
          <Text fontWeight="bold" my="1vh" fontSize="xl" display="inline-block">Teams</Text>  
          <AddModal/>
          {teams.map((team) => (
            <Button key="" bg="blue.800" textColor="white" width="100%" my="1vh" height="10vh" onClick={()=>populateEmployees(team.id)}>{team.name}</Button>
          ))}
        </Box>
        <Box py="4vh">
            <Text fontWeight="bold" my="1vh" fontSize="xl" display="inline-block"></Text>
            <EditModal/>
            <DeleteModal/>
          <ListTeam employees={employees}/>
        </Box>
      </Grid>
    </Box>
    </>
  );
}

AdminTeams.propTypes={
 LinkItems:PropTypes.any, onOpen: PropTypes.any, isOpen: PropTypes.any, onClose: PropTypes.any, isAuthenticated: PropTypes.any
}