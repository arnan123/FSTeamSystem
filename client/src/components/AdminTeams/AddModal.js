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
  Link,
  Checkbox,
  Grid
} from '@chakra-ui/react'

function AddModal() {
  const { isOpen : isAddModalOpen, onOpen : onAddModalOpen, onClose : onAddModalClose } = useDisclosure();

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
            <Input placeholder='Team Name' mb="4vh"></Input>
            <Text mb="1vh">Members</Text>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
              <Checkbox>Rayl Xylem</Checkbox>
            </Grid>
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