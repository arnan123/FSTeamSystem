import React, { useState, useEffect } from 'react';
import {
  Box,
  useColorModeValue,
  Grid,
  Text,
  Button,
  Drawer,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react';
import {
  FiWatch,
  FiGrid,
  FiUsers,
  FiClock,
} from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {PropTypes} from "prop-types";
import Header from "../components/Header.js";
import Breadcrumb from '../components/AdminTeams/Breadcrumbs.js';
import ListTeam from '../components/AdminTeams/ListTeam.js';
import AddModal from '../components/AdminTeams/AddModal.js';
import DeleteModal from '../components/AdminTeams/DeleteModal.js';
import EditModal from '../components/AdminTeams/EditModal.js';
import Sidebar from "../components/Sidebar.js";

const LinkItems = [
  { name: 'Daily Time Record', icon: FiClock, address:"/"},
  { name: 'Departments', icon: FiGrid , address:"/departments"  },
  { name: 'Employees', icon: FiUsers, address:"/employees" },
  { name: 'Holidays', icon: FiWatch, address:"/holidays" },
];

export default function AdminTeams(){
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


  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
    <Header onOpen={onOpen} headerTitle={department.name}/>
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
 LinkItems:PropTypes.any
}