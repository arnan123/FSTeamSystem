import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Input,
  Select,
  useToast
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import axios from 'axios'

function AddModal() {
  const { isOpen : isAddModalOpen, onOpen : onAddModalOpen, onClose : onAddModalClose } = useDisclosure();
  const toast = useToast();
  const [departments, setDepartments] = useState([]);
  const [teams, setTeams] = useState([]);
  const [department, setDepartment] = useState(null);
  const [team, setTeam] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/department/view").then((response) => {
      setDepartments(response.data);
    });
  },[]);

  useEffect(() => {
    axios.get("http://localhost:8080/team/teamsPerDept/1").then((response) => {
      setTeams(response.data);
    });
  },[]);

  function populateTeams(id){
    setDepartment(id);
    axios.get("http://localhost:8080/team/teamsPerDept/"+ id).then((response) => {
      setTeams(response.data);
    });
  }

  const addEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      status: status,
      team: team,
      department: department,
      insertDate: new Date(),
      updateDate: new Date(),
    };

    axios
      .post('http://localhost:8080/admin/addEmployee', employee)
      .then(() => {
        toast({
          title: 'Added Employee',
          description: 'Employee was added successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
        onAddModalClose();
      });
  };

  return (
    <>
      <Button leftIcon={<AddIcon />} maxW="24h" mx="3vh" bg="blue.800" textColor="white" fontSize="sm"  onClick={onAddModalOpen}>Add Employee</Button>

      <Modal onClose={onAddModalClose} isOpen={isAddModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1vh">Employee First Name</Text>
            <Input placeholder='Employee First Name' onChange={(e)=>setFirstName(e.target.value)}></Input>
            <Text mb="1vh">Employee Last Name</Text>
            <Input placeholder='Employee Last Name' onChange={(e)=>setLastName(e.target.value)}></Input>
            <Text mb="1vh">Employee Email</Text>
            <Input placeholder='Employee Email' onChange={(e)=>setEmail(e.target.value)}></Input>
            <Text mb="1vh">Department</Text>
            <Select placeholder="Department" onChange={(e)=>populateTeams(e.target.key)}>
              {departments.map((department)=>(
                <option key={department.id}>{department.name}</option>
              ))}
            </Select>
            <Text mb="1vh" placeholder="Team">Team</Text>
            <Select placeholder="Team" onChange={(e)=>setTeam(e.target.key)}>
              {teams.map((team)=>(
                <option key={team.id}>{team.name}</option>
              ))}
            </Select>
            <Text mb="1vh">Role</Text>
            <Select placeholder="Role" onChange={(e)=>setRole(e.target.value)}>
              <option value="EMPLOYEE">EMPLOYEE</option>
              <option value="ADMIN">ADMIN</option>
              <option value="SUPERADMIN">SUPERADMIN</option>
            </Select>
            <Text  mb="1vh">Status</Text>
            <Select placeholder="Status" onChange={(e)=>setStatus(e.target.value)}>
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
              <option value="INTERN">INTERN</option>
              <option value="CONTRACTUAL">CONTRACTUAL</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={addEmployee}>Add</Button>
            <Button onClick={onAddModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddModal;