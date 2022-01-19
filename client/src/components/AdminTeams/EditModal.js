import React, {useState} from 'react';
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
  Link,
  useToast
} from '@chakra-ui/react'
import { PropTypes } from 'prop-types'
import axios from 'axios';

export default function EditModal({deptid, teamid, setTeams}) {
  const { isOpen : isEditModalOpen, onOpen : onEditModalOpen, onClose : onEditModalClose } = useDisclosure();
  const [name, setName]=useState("");
  const toast = useToast();

  const editTeam = (e) => {
    e.preventDefault();
    const team = {
      name: name,
      insertDate: new Date(),
      updateDate: new Date(),
    };

    axios
      .put('http://localhost:8080/team/updateTeam/'+teamid, team)
      .then(() => {
        toast({
          title: 'Edited Team',
          description: 'Team was edited successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
        axios.get("http://localhost:8080/team/teamsPerDept"+deptid).then((response) => {
          setTeams(response.data);
        },[]);
        onEditModalClose();
      });
  };

  return (
    <>
      <Link my="1vh" mx="1vh" float="right" onClick={onEditModalOpen}>Edit Team</Link>

      <Modal onClose={onEditModalClose} isOpen={isEditModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1vh">Team Name</Text>
            <Input placeholder='Team Name' onChange={e=>setName(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={editTeam}>Edit</Button>
            <Button onClick={onEditModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

EditModal.propTypes={
  deptid: PropTypes.any, setTeams: PropTypes.any, teamid: PropTypes.any
}