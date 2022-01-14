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
  Box,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import moment from 'moment';
// import moment from 'moment';

function ModalCalendar({ onClose, isOpen, holidays, date }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>LIST OF HOLIDAY </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            {holidays.map((holiday) => (
              <Box key={holiday.id}>
                {moment(holiday.holidayDate).format('MMMM')}
                {moment(date).format('MMMM')}
                {moment(holiday.holidayDate).format('D')}
                {moment(date).format('D')}
                {moment(holiday.holidayDate).format('MMMM') ==
                  moment(date).format('MMMM') &&
                  moment(holiday.holidayDate).format('D') ==
                    moment(date).format('D') && (
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      {holiday.name}
                    </ListItem>
                  )}
              </Box>
            ))}
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
  holidays: PropTypes.any,
  date: PropTypes.any,
};

export default ModalCalendar;
