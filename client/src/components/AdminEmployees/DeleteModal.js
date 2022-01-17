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
import { DeleteIcon } from '@chakra-ui/icons'
import { PropTypes } from 'prop-types'
import axios from 'axios';

export default function DeleteModal({ids, setEmployees}) {
  const { isOpen : isDeleteModalOpen, onOpen : onDeleteModalOpen, onClose : onDeleteModalClose } = useDisclosure();
  const toast = useToast();

  function deleteEmployees(){
    axios.delete("http://localhost:8080/admin/deleteUsers/?userId="+ids).then(() => {
      toast({
        title: "Employees Delete",
        description: "Employees deleted successfully",
        position: "top",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
      axios.get("http://localhost:8080/admin/view").then((response) => {
        setEmployees(response.data);
      });
      onDeleteModalClose();
    });
  }

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
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={deleteEmployees}>Delete</Button>
            <Button onClick={onDeleteModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

DeleteModal.propTypes={
  ids:PropTypes.any, setEmployees: PropTypes.any
}