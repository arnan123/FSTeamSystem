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
  useDisclosure
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

function DeleteModal() {
  const { isOpen : isDeleteModalOpen, onOpen : onDeleteModalOpen, onClose : onDeleteModalClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<DeleteIcon />} maxW="24h" mx="3vh" bg="blue.800" textColor="white" fontSize="sm"  onClick={onDeleteModalOpen}>Remove Employee</Button>

      <Modal onClose={onDeleteModalClose} isOpen={isDeleteModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to remove this employee?
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh">Delete</Button>
            <Button onClick={onDeleteModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteModal;