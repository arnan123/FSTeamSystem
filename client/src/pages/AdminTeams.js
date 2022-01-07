import React from 'react';
import {
  Box,
  useColorModeValue,
  Grid,
  Text,
  Button,
  Drawer,
  DrawerContent
} from '@chakra-ui/react';
import {PropTypes} from "prop-types";
import { useEffect } from 'react';
import Header from "../components/Header.js";
import Breadcrumb from '../components/AdminTeams/Breadcrumbs.js';
import ListTeam from '../components/AdminTeams/ListTeam.js';
import AddModal from '../components/AdminTeams/AddModal.js';
import DeleteModal from '../components/AdminTeams/DeleteModal.js';
import EditModal from '../components/AdminTeams/EditModal.js';
import Sidebar from "../components/Sidebar.js";

export default function AdminTeams(props){
  useEffect(() => {
    document.title="Teams";
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
    <Header onOpen={props.onOpen} headerTitle="Teams"/>
    <Box
      p="4vh"
      ml={{ base: 0, md: 60 }}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
      <Breadcrumb/>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <Box py="4vh">
          <Text fontWeight="bold" my="1vh" fontSize="xl" display="inline-block">Teams</Text>
          <AddModal/>
          <Button bg="blue.800" textColor="white" width="100%" my="1vh" height="10vh">Team 1</Button>
          <Button bg="blue.800" textColor="white" width="100%" my="1vh" height="10vh">Team 2</Button>
          <Button bg="blue.800" textColor="white" width="100%" my="1vh" height="10vh">Team 3</Button>
          <Button bg="blue.800" textColor="white" width="100%" my="1vh" height="10vh">Team 4</Button>
          <Button bg="blue.800" textColor="white" width="100%" my="1vh" height="10vh">Team 5</Button>
        </Box>
        <Box py="4vh">
            <Text fontWeight="bold" my="1vh" fontSize="xl" display="inline-block">Team 1</Text>
            <EditModal/>
            <DeleteModal/>
          <ListTeam/>
        </Box>
      </Grid>
    </Box>
    </>
  );
}

AdminTeams.propTypes={
  onOpen:PropTypes.any, isOpen:PropTypes.any, onClose:PropTypes.any, LinkItems:PropTypes.any
}