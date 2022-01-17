import React, { useState } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { PropTypes } from 'prop-types'

export default function AddModal({setDepartments}) {
  const {
    isOpen: isAddModalOpen,
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
  } = useDisclosure();
  const toast = useToast();
  const [deptName, setDeptName] = useState('');
  const [deptType, setDeptType] = useState('');

  const addDepartment = (e) => {
    e.preventDefault();
    const department = {
      name: deptName,
      type: deptType,
      activeInd: 1,
      insertDate: new Date(),
      updateDate: new Date(),
    };

    axios
      .post('http://localhost:8080/department/addDepartment', department)
      .then(() => {
        toast({
          title: 'Added Department',
          description: 'Department was added successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
        axios.get("http://localhost:8080/department/view/").then((response) => {
          setDepartments(response.data);
        });
        onAddModalClose();
      });
  };

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        maxW="24h"
        mx="3vh"
        bg="blue.800"
        textColor="white"
        fontSize="sm"
        onClick={onAddModalOpen}>
        Add Department
      </Button>

      <Modal onClose={onAddModalClose} isOpen={isAddModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Department</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1vh">Department Name</Text>
            <Input
              placeholder="Department Name"
              onChange={(e) => setDeptName(e.target.value)}
            />
            <Text mb="1vh">Department Type</Text>
            <Select
              placeholder="Department"
              onChange={(e) => setDeptType(e.target.value)}>
              <option value="HR">HR</option>
              <option value="ENGINEER">ENGINEER</option>
              <option value="ADOPS">ADOPS</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="blue.800"
              textColor="white"
              mx="1vh"
              onClick={addDepartment}>
              Add
            </Button>
            <Button onClick={onAddModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

AddModal.propTypes={
  setDepartments:PropTypes.any
}