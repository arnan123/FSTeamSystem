import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ModalContainer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSetIndicator = () => {
    if (props.indicator === false) {
      props.setIndicator(true);
    } else {
      props.setIndicator(false);
    }

    onClose();
  };

  return (
    <>
      <Button colorScheme={props.buttoncolor} onClick={onOpen}>
        {props.buttontext}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay w={'100%'} />
        <ModalContent w={'80%'}>
          <ModalHeader>{props.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.content}</ModalBody>

          <ModalFooter>
            <Button colorScheme={'red'} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="solid"
              colorScheme={props.buttoncolor}
              onClick={onSetIndicator}>
              {props.buttontext}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

ModalContainer.propTypes = {
  header: PropTypes.string,
  footer: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
  buttontext: PropTypes.string,
  buttoncolor: PropTypes.string,
  setIndicator: PropTypes.any,
  indicator: PropTypes.any,
};

export default ModalContainer;
