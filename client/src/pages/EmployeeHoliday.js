import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {
  useDisclosure,
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
import 'react-calendar/dist/Calendar.css';
import { StarIcon } from '@chakra-ui/icons';
import { Helmet } from 'react-helmet';

export default function EmployeeHoliday() {
  const [date, setDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (date) => {
    setDate(date);
  };

  function openModal() {
    onOpen();
  }

  return (
    <>
      <Helmet>
        <style>
          {`
            body {
                  background-color : #2a3b5e
                }
          `}
        </style>
        <title>FST Holidays</title>
      </Helmet>
      <Calendar onChange={onChange} value={date} onClickDay={openModal} />

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
    </>
  );
}
