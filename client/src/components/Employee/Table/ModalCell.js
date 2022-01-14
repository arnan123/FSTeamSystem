import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Table,
  //   Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Editable,
  EditableInput,
  EditablePreview,
  useDisclosure,
  useToast,
  Tooltip,
  HStack,
  Text,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import './ModalCell.css';
import EmployeeTableData from './EmployeeTableData';
import moment from 'moment';
import axios from 'axios';

function ModalCell({ attendance, ind, userData, month, days }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeStarted, setTimeStarted] = useState(attendance.timeStarted);
  const [timeEnded, setTimeEnded] = useState(attendance.timeEnded);
  const [elapsedBreak, setElapsedBreak] = useState(attendance.elapsedBreak);
  const [overTime, setOverTime] = useState(attendance.overTime);
  const [tardiness, setTardiness] = useState(attendance.tardiness);
  const toast = useToast();
  const dayInt = parseInt(moment(attendance.insertDate).format('D'));
  const nxtMonth = parseInt(moment().month(month).format('M'));
  const nxtM = nxtMonth;

  const saveDTR = (e) => {
    e.preventDefault();
    const log = {
      timeStarted: timeStarted,
      timeEnded: timeEnded,
      elapsedBreak: elapsedBreak,
      overTime: overTime,
      tardiness: tardiness,
      insertDate: new Date(),
    };

    axios
      .post(
        'http://localhost:8080/log/createLog/' +
          attendance.id +
          '/' +
          userData.id,
        log,
      )
      .then(() => {
        toast({
          title: 'Data Saved',
          description: 'Data Saved successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
        onClose();
      });
  };

  return (
    <>
      {moment(attendance.insertDate).format('MMMM') == month &&
      (days == 5
        ? dayInt > 5 && dayInt <= 20
        : dayInt > 20 ||
          (moment(attendance.insertDate).format('MMMM') ==
            moment().month(nxtM.toString()).format('MMMM') &&
            dayInt <= 5)) ? (
        <EmployeeTableData onOpen={onOpen} ind={ind} attendance={attendance} />
      ) : (
        <Tr></Tr>
      )}

      {moment(attendance.insertDate).format('MMMM') ==
        moment().month(nxtM.toString()).format('MMMM') &&
        dayInt <= 5 &&
        days == 20 && (
          <EmployeeTableData
            onOpen={onOpen}
            ind={ind}
            attendance={attendance}
          />
        )}

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <Text>Edit Datas</Text>

              <Tooltip label="You can now edit the datas">
                <QuestionOutlineIcon h={4} w={4} />
              </Tooltip>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom={'5%'}>
            <Table variant="simple" size={'sm'} color={'white'}>
              <Tbody color={'white'} textAlign={'center'}>
                <Tr>
                  <Th color={'white'} w={'2vw'}>
                    Date
                  </Th>
                  <Td textAlign={'center'}>
                    {moment(attendance.insertDate).format('MMMM D')}
                  </Td>
                </Tr>
                <Tr>
                  <Th color={'white'} w={'2vw'}>
                    Timein
                  </Th>
                  <Td textAlign={'center'}>
                    <Editable placeholder={attendance.timeStarted}>
                      <EditableInput
                        onChange={(e) => setTimeStarted(e.target.value)}
                      />
                      <EditablePreview />
                    </Editable>
                  </Td>
                </Tr>
                <Tr>
                  <Th color={'white'} w={'2vw'}>
                    Timeout
                  </Th>
                  <Td textAlign={'center'}>
                    <Editable placeholder={attendance.timeEnded}>
                      <EditableInput
                        onChange={(e) => setTimeEnded(e.target.value)}
                      />
                      <EditablePreview />
                    </Editable>
                  </Td>
                </Tr>
                <Tr>
                  <Th color={'white'} w={'2vw'}>
                    Lunch
                  </Th>
                  <Td textAlign={'center'}>
                    <Editable placeholder={attendance.elapsedBreak}>
                      <EditableInput
                        onChange={(e) => setElapsedBreak(e.target.value)}
                      />
                      <EditablePreview />
                    </Editable>
                  </Td>
                </Tr>
                <Tr>
                  <Th color={'white'} w={'2vw'}>
                    Overtime
                  </Th>
                  <Td textAlign={'center'}>
                    <Editable placeholder={attendance.overTime}>
                      <EditableInput
                        onChange={(e) => setOverTime(e.target.value)}
                      />
                      <EditablePreview />
                    </Editable>
                  </Td>
                </Tr>
                <Tr>
                  <Th color={'white'} w={'2vw'}>
                    Tardiness
                  </Th>
                  <Td textAlign={'center'}>
                    <Editable placeholder={attendance.tardiness}>
                      <EditableInput
                        onChange={(e) => setTardiness(e.target.value)}
                      />
                      <EditablePreview />
                    </Editable>
                  </Td>
                </Tr>
                <Tr>
                  <Th color={'white'} w={'2vw'}>
                    Total Hours
                  </Th>
                  <Td textAlign={'center'}>{attendance.totalTime}</Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="solid" colorScheme={'green'} onClick={saveDTR}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

ModalCell.propTypes = {
  onOpen: PropTypes.any,
  isOpens: PropTypes.any,
  onCloses: PropTypes.any,
  attendance: PropTypes.any,
  ind: PropTypes.any,
  userData: PropTypes.any,
  month: PropTypes.any,
  days: PropTypes.any,
};

export default ModalCell;
