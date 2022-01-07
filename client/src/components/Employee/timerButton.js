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
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const TimerButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function confirmationModal() {
    if (props.state) {
      onOpen();
    } else if (!props.state) {
      props.function();
    }
  }
  return (
    <>
      <Button bg={props.color} onClick={confirmationModal}>
        {props.desc}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TIMEOUT CONFIRM</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Sure najud sya boss?</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={props.function}
              onClickCapture={onClose}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

TimerButton.propTypes = {
  desc: PropTypes.any,
  function: PropTypes.func,
  color: PropTypes.any,
  state: PropTypes.any,
};

export default TimerButton;
