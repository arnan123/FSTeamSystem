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
import axios from 'axios';
import { PropTypes } from 'prop-types'

export default function DeleteModal({ids, setHolidays}) {
  const { isOpen : isDeleteModalOpen, onOpen : onDeleteModalOpen, onClose : onDeleteModalClose } = useDisclosure();
  const toast=useToast();

  function deleteHolidays(){
    axios.delete("http://localhost:8080/holiday/deleteHolidays/?holidayId="+ids).then(() => {
      toast({
        title: "Holidays Delete",
        description: "Holidays deleted successfully",
        position: "top",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
      axios.get("http://localhost:8080/holiday/viewHoliday").then((response) => {
        setHolidays(response.data);
      });
      onDeleteModalClose();
    });
  }

  return (
    <>
      <Button leftIcon={<DeleteIcon />} maxW="24h" bg="blue.800" textColor="white" fontSize="sm"  onClick={onDeleteModalOpen}>Delete Holiday</Button>

      <Modal onClose={onDeleteModalClose} isOpen={isDeleteModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Holiday</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this holiday?
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={deleteHolidays}>Delete</Button>
            <Button onClick={onDeleteModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

DeleteModal.propTypes={
  ids: PropTypes.any, setHolidays: PropTypes.any
}