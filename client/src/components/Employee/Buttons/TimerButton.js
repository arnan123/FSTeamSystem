import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react';

function TimerButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button size={props.size} color={props.color} onClick={onOpen}>
        {props.text}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={'90vw'}>
          <ModalHeader>{props.text}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{props.description}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={props.click}
              onClickCapture={onClose}>
              {props.text}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

TimerButton.propTypes = {
  size: PropTypes.any,
  color: PropTypes.any,
  text: PropTypes.any,
  click: PropTypes.any,
  status: PropTypes.any,
  setStatus: PropTypes.any,
  description: PropTypes.any,
};

export default TimerButton;
