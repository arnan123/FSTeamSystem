import React, { useState } from 'react';
import '../Calendar/calendar.css';
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
  Center,
  Box,
  Text,
  VStack,
  Select,
  Grid,
  GridItem,
  useMediaQuery,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function EmployeeCalendar() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [date, setDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [style] = useState('Calendar Style');
  const onChange = (date) => {
    setDate(date);
  };

  function openModal() {
    onOpen();
  }

  return (
    <>
      <VStack paddingTop={'5%'}>
        <Box h={'10vh'}>
          <Button
            color={'white'}
            fontSize={'3xl'}
            leftIcon={<StarIcon />}
            variant={'ghost'}
            _hover={{ bgColor: ' #2a3b5e' }}>
            <Text>Holiday</Text>
          </Button>
        </Box>
        <Box>
          <Grid
            templateColumns={
              isLargerThan1000 ? 'repeat(6, 1fr)' : 'repeat(3, 1fr)'
            }>
            <GridItem colStart={isLargerThan1000 ? 6 : 3}>
              <Select placeholder={style} variant={'outline'} bgColor={'white'}>
                <option>List Style</option>
              </Select>
            </GridItem>
          </Grid>
        </Box>
        <Center>
          <Calendar onChange={onChange} value={date} onClickDay={openModal} />
        </Center>
      </VStack>

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

export default EmployeeCalendar;
