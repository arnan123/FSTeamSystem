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
  useToast
} from '@chakra-ui/react'
import axios from 'axios';
import { DeleteIcon } from '@chakra-ui/icons'
import {PropTypes} from 'prop-types';

export default function DeleteModal({id}) {
  const { isOpen : isDeleteModalOpen, onOpen : onDeleteModalOpen, onClose : onDeleteModalClose } = useDisclosure();
  const toast = useToast()
  
  function deleteDepartment(){
    axios.delete("http://localhost:8080/department/deleteDepartment/" + id).then(() => {
      toast({
        title: "Department Delete",
        description: "Department deleted successfully",
        position: "top",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
      onDeleteModalClose();
    });
  }

  return (
    <>
      <DeleteIcon float="right" margin="1vh" onClick={onDeleteModalOpen} cursor="pointer"/>

      <Modal onClose={onDeleteModalClose} isOpen={isDeleteModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Department</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this department?
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={deleteDepartment}>Delete</Button>
            <Button onClick={onDeleteModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

DeleteModal.propTypes={
  id:PropTypes.any
}