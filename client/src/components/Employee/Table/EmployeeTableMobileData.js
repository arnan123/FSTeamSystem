import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tr, Th, Table, Tbody, Td } from '@chakra-ui/react';
import moment from 'moment';

function EmployeeTableMobileData(props) {
  return (
    <>
      <Box>
        <Table variant="simple" size={'sm'}>
          <Tbody
            color={'white'}
            onClick={props.onOpen}
            id={props.ind == true ? 'trHover' : ''}
            bgColor={props.attendance.approved == 0 ? 'blue.800' : 'green.400'}>
            <Tr>
              <Th>Date</Th>
              <Td>{moment(props.attendance.insertDate).format('MMMM D')}</Td>
            </Tr>
            <Tr>
              <Th>Time Started</Th>
              <Td>{props.attendance.timeStarted}</Td>
            </Tr>
            <Tr>
              <Th>Time Ended</Th>
              <Td>{props.attendance.timeEnded}</Td>
            </Tr>
            <Tr>
              <Th>Lunch</Th>
              <Td>{props.attendance.elapsedBreak}</Td>
            </Tr>
            <Tr>
              <Th>Overtime</Th>
              <Td>{props.attendance.overTime}</Td>
            </Tr>
            <Tr>
              <Th>Total Time</Th>
              <Td>{props.attendance.totalTime}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

EmployeeTableMobileData.propTypes = {
  ind: PropTypes.bool,
  onOpen: PropTypes.any,
  attendance: PropTypes.any,
};

export default EmployeeTableMobileData;
