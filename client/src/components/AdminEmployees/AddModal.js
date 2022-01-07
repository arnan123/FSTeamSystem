import React from 'react';
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
  Select
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

function AddModal() {
  const { isOpen : isAddModalOpen, onOpen : onAddModalOpen, onClose : onAddModalClose } = useDisclosure();

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
            <Input placeholder='Employee Name'></Input>
            <Text mb="1vh">Employee Last Name</Text>
            <Input placeholder='Employee Name'></Input>
            <Text mb="1vh">Employee Email</Text>
            <Input placeholder='Employee Name'></Input>
            <Text mb="1vh">Department</Text>
            <Select>
              <option value='option1' selected="selected">Department 1</option>
              <option value='option2'>Department 2</option>
              <option value='option3'>Department 3</option>
            </Select>
            <Text mb="1vh">Team</Text>
            <Select>
              <option value='option1' selected="selected">Team 1</option>
              <option value='option2'>Team 2</option>
              <option value='option3'>Team 3</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh">Add</Button>
            <Button onClick={onAddModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddModal;