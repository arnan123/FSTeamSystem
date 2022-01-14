import { Box, ButtonGroup, Flex, Center, Spacer } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';
import ModalContainer from '../../ModalContainer';
import React, { useEffect, useState } from 'react';
import EditableCell from '../../EditableCell';
import PropTypes from 'prop-types';
import axios from 'axios';
import EmployeeSelect from './EmployeeSelect';
import moment from 'moment';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { CalendarIcon } from '@chakra-ui/icons';

function EmployeeTable({ userData }) {
  const [ind, setInd] = useState(false);
  const [tableDatas, setTableDatas] = useState([]);
  const [dates, setDates] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/attendance/viewDTR/' + userData.id)
      .then((response) => {
        setTableDatas(response.data);
      });
    // console.log(tableDatas);
  }, []);
  return (
    <>
      <Box paddingBottom={5}>
        <Box>
          <Center>
            <Flex w={'60vw'}>
              <Box>
                <ButtonGroup gap={1}>
                  <EmployeeSelect
                    dateData="year"
                    attendance={tableDatas}
                    dates={dates}
                    setDates={setDates}
                  />
                  <EmployeeSelect
                    dateData="month"
                    attendance={tableDatas}
                    dates={dates}
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
            </Tr>
          </Thead>
          <Tbody>
            {tableDatas.map((tableData) => (
              <Tr key={tableData.id}>
                <Td>{moment(tableData.insertDate).format('MMMM Do YYYY')}</Td>
                <Td>
                  <EditableCell
                    indicator={ind}
                    tablecontent={tableData.timeStarted}
                  />
                </Td>
                <Td>
                  <EditableCell
                    indicator={ind}
                    tablecontent={tableData.timeEnded}
                  />
                </Td>
                <Td>
                  <EditableCell
                    indicator={ind}
                    tablecontent={tableData.elapsedBreak}
                  />
                </Td>
                <Td>
                  <EditableCell
                    indicator={ind}
                    tablecontent={tableData.overTime}
                  />
                </Td>
                <Td>
                  <EditableCell
                    indicator={ind}
                    tablecontent={tableData.totalTime}
                  />
                </Td>
              </Tr>
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
