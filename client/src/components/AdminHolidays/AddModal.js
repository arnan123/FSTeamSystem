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
  Input
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

function AddModal() {
  const { isOpen : isAddModalOpen, onOpen : onAddModalOpen, onClose : onAddModalClose } = useDisclosure();

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
            <Input placeholder='Holiday Name'></Input>
            <Text mb="1vh">Holiday Type</Text>
            <Input placeholder='Holiday Type'></Input>
            <Text mb="1vh">Holiday Date</Text>
            <Input placeholder='Holiday Date'></Input> 
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