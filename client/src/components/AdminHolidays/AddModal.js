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
  useToast
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import axios from 'axios'

function AddModal() {
  const { isOpen : isAddModalOpen, onOpen : onAddModalOpen, onClose : onAddModalClose } = useDisclosure();
  const [name, setName] = useState("");
  const [holidayDate, setHolidayDate] = useState(new Date());
  const [holidayType, setHolidayType] = useState("");
  const toast = useToast();

  const addHoliday = (e) => {
    e.preventDefault();
    const holiday = {
      name: name,
      holidayType: holidayType,
      holidayDate: holidayDate,
      insertDate: new Date(),
    };

    axios
      .post('http://localhost:8080/holiday/addHoliday', holiday)
      .then(() => {
        toast({
          title: 'Added Holiday',
          description: 'Holiday was added successfully',
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
      <Button leftIcon={<AddIcon />} maxW="24h" mx="2vh" bg="blue.800" textColor="white" fontSize="sm"  onClick={onAddModalOpen}>Add Holiday</Button>

      <Modal onClose={onAddModalClose} isOpen={isAddModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Holiday</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1vh">Holiday Name</Text>
            <Input placeholder='Holiday Name' onChange={(e)=>setName(e.target.value)}></Input>
            <Text mb="1vh">Holiday Type</Text>
            <Select placeholder="Holiday Type" onChange={(e)=>setHolidayType(e.target.value)}>
              <option value="JAPAN">JAPAN</option>
              <option value="PHILIPPINES">PHILIPPINES</option>
            </Select>
            <Text mb="1vh">Holiday Date</Text>
            <Input type="date" onChange={(e)=>setHolidayDate(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={addHoliday}>Add</Button>
            <Button onClick={onAddModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddModal;