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

function EditModal() {
  const { isOpen : isEditModalOpen, onOpen : onEditModalOpen, onClose : onEditModalClose } = useDisclosure();

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
            <Button bg="blue.800" textColor="white" mx="1vh">Edit</Button>
            <Button onClick={onEditModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditModal;