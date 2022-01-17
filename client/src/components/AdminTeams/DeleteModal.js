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
  Link,
  useToast
} from '@chakra-ui/react'
import axios from 'axios';
import { PropTypes } from 'prop-types'

export default function DeleteModal({teamid, setTeams, deptid}) {
  const { isOpen : isDeleteModalOpen, onOpen : onDeleteModalOpen, onClose : onDeleteModalClose } = useDisclosure();
  const toast = useToast();

  function deleteTeam(){
    axios.delete("http://localhost:8080/team/deleteTeam/" + teamid).then(() => {
      toast({
        title: "Team Delete",
        description: "Team deleted successfully",
        position: "top",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
      axios.get("http://localhost:8080/teamsPerDept/view/"+deptid).then((response) => {
        setTeams(response.data);
      },[]);
      onDeleteModalClose();
    });
  }

  return (
    <>
      <Link my="1vh" float="right" onClick={onDeleteModalOpen}>Delete Team</Link>

      <Modal onClose={onDeleteModalClose} isOpen={isDeleteModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this team?
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={deleteTeam}>Delete</Button>
            <Button onClick={onDeleteModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

DeleteModal.propTypes={
  teamid: PropTypes.any, deptid: PropTypes.any, setTeams: PropTypes.any
}