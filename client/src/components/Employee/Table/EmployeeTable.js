import {
  Box,
  ButtonGroup,
  Flex,
  Center,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th } from '@chakra-ui/react';
import ModalContainer from '../../ModalContainer';
import React, { useEffect, useState } from 'react';
// import EditableCell from '../../EditableCell';
import PropTypes from 'prop-types';
import axios from 'axios';
import EmployeeSelect from './EmployeeSelect';

import ModalCell from './ModalCell';
import moment from 'moment';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { CalendarIcon } from '@chakra-ui/icons';

function EmployeeTable({ userData }) {
  const [ind, setInd] = useState(false);
  const [tableDatas, setTableDatas] = useState([]);
  const [dates, setDates] = useState(moment().format('MMMM'));
  const [day, setDay] = useState(5);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get('http://localhost:8080/attendance/viewDTR/' + userData.id)
      .then((response) => {
        setTableDatas(response.data);
      });
    // console.log(tableDatas);
  }, [ind]);

  return (
    <>
      <Box paddingBottom={5}>
        <Box>
          <Center>
            <Flex w={'60vw'}>
              <Box>
                <ButtonGroup gap={1}>
                  <EmployeeSelect
                    dateData="month"
                    attendance={tableDatas}
                    dates={dates}
                    setDay={setDay}
                    setDates={setDates}
                  />
                  <EmployeeSelect
                    dateData="half"
                    attendance={tableDatas}
                    dates={dates}
                    setDay={setDay}
                    setDates={setDates}
                  />
                </ButtonGroup>
              </Box>
              <Spacer />
              <Box>
                <ModalContainer
                  buttoncolor={ind == true ? 'green' : 'blue'}
                  buttontext={ind == true ? 'Save' : 'Edit'}
                  header={ind == true ? 'Save Data' : 'Edit Data'}
                  content={
                    ind == true
                      ? 'After clicking this action the data will be saved.'
                      : 'After clicking this action the data can be edited.'
                  }
                  setIndicator={setInd}
                  indicator={ind}
                  userData={userData}
                />
              </Box>
            </Flex>
          </Center>
        </Box>
      </Box>
      <Box>
        <Table variant="simple" w={'50vw'} size={'sm'} color={'white'}>
          <Thead>
            <Tr bgColor={'gray'} borderRadius={10}>
              <Th>Date</Th>
              <Th>Time in</Th>
              <Th>Time out</Th>
              <Th>Lunch</Th>
              <Th>Overtime</Th>
              <Th>Total Hours</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableDatas.map((tableData) => (
              <ModalCell
                key={tableData.id}
                ind={ind}
                month={dates}
                onOpen={onOpen}
                isOpens={isOpen}
                onCloses={onClose}
                attendance={tableData}
                userData={userData}
                days={day}
              />
            ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </Box>
    </>
  );
}

EmployeeTable.propTypes = {
  userData: PropTypes.any,
};

export default EmployeeTable;
