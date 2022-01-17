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

export default function AddModal({deptid, setTeams}) {
  const { isOpen : isAddModalOpen, onOpen : onAddModalOpen, onClose : onAddModalClose } = useDisclosure();
  const [name, setName]=useState("");
  const toast = useToast();

  const addTeam = (e) => {
    e.preventDefault();
    const team = {
      name: name,
      insertDate: new Date(),
      updateDate: new Date(),
    };

    axios
      .post('http://localhost:8080/team/addTeam/'+deptid, team)
      .then(() => {
        toast({
          title: 'Added Team',
          description: 'Team was added successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
        axios.get("http://localhost:8080/team/teamsPerDept"+deptid).then((response) => {
          setTeams(response.data);
        },[]);
        onAddModalClose();
      });
  };

  return (
    <>
      <Link my="2vh" float="right" display="inline-block" onClick={onAddModalOpen}>Add Team</Link>

      <Modal onClose={onAddModalClose} isOpen={isAddModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1vh">Team Name</Text>
            <Input placeholder='Team Name' onChange={e=>setName(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.800" textColor="white" mx="1vh" onClick={addTeam}>Add</Button>
            <Button onClick={onAddModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

AddModal.propTypes={
  deptid: PropTypes.any, setTeams: PropTypes.any
}