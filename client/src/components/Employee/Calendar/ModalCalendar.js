import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListIcon,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Modal,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function ModalCalendar({ onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>LIST OF HOLIDAY</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            <ListItem>
              <ListIcon as={StarIcon} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} color="green.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ModalCalendar.propTypes = {
  onClose: PropTypes.any,
  isOpen: PropTypes.any,
};

export default ModalCalendar;
