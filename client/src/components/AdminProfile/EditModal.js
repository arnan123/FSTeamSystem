import React, { useState } from 'react';
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
  Box,
  Text,
  Input,
  useToast,
  HStack,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { PropTypes } from 'prop-types'

export default function EditModal({attendance, userID}) {
  const {
    isOpen: isAddModalOpen,
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
  } = useDisclosure();
  const toast = useToast();
  const [timeStarted, setTimeStarted] =useState(attendance.timeStarted);
  const [timeEnded, setTimeEnded] =useState(attendance.timeEnded);
  const [elapsedBreak, setElapsedBreak] =useState(attendance.elapsedBreak);
  const [overTime, setOverTime] =useState(attendance.overTime);
  const [tardiness, setTardiness] =useState(attendance.tardiness);

  const sendRequest = (e) => {
    e.preventDefault();
    const log = {
      timeStarted: timeStarted,
      timeEnded: timeEnded,
      elapsedBreak: elapsedBreak,
      overTime: overTime,
      tardiness: tardiness,
      insertDate: new Date()
    };

    axios
      .put('http://localhost:8080/log/createLog/'+attendance.id+'/'+userID, log)
      .then(() => {
        toast({
          title: 'Request Sent',
          description: 'DTR change request was sent successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
        onAddModalClose();
      });
  };

  return (
    <>
      <EditIcon cursor="pointer" onClick={onAddModalOpen}/>

      <Modal onClose={onAddModalClose} isOpen={isAddModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit DTR</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Box>
                <Text mb="2vh">Time Started</Text>
                <Input
                  value={timeStarted}
                  onChange={(e) => setTimeStarted(e.target.value)}
                />
              </Box>
              <Box>
                <Text mb="2vh">Time Ended</Text>
                <Input
                  value={timeEnded}
                  onChange={(e) => setTimeEnded(e.target.value)}
                />
              </Box>
              <Box>
                <Text mb="2vh">Elapsed Break</Text>
                <Input
                  value={elapsedBreak}
                  onChange={(e) => setElapsedBreak(e.target.value)}
                />
              </Box>
              <Box>
                <Text mb="2vh">Overtime</Text>
                <Input
                  value={overTime}
                  onChange={(e) => setOverTime(e.target.value)}
                />
              </Box>
              <Box>
                <Text mb="2vh">Tardiness</Text>
                <Input
                  value={tardiness}
                  onChange={(e) => setTardiness(e.target.value)}
                />
              </Box>
            </HStack>
            
          </ModalBody>
          <ModalFooter>
            <Button
              bg="blue.800"
              textColor="white"
              mx="1vh"
              onClick={sendRequest}>
              Send Request
            </Button>
            <Button onClick={onAddModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

EditModal.propTypes={
  attendance:PropTypes.any, userID: PropTypes.any
}