import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Td, Tr } from '@chakra-ui/react';
import './ModalCell.css';
import moment from 'moment';

function EmployeeTableData(props) {
  return (
    <>
      <Tr
        onClick={props.ind == true ? props.onOpen : props.ind}
        id={props.ind == true ? 'trHover' : ''}
        bgColor={props.attendance.approved == 0 ? 'blue.800' : 'green.400'}>
        <Td>{moment(props.attendance.insertDate).format('MMMM D')}</Td>
        <Td>{props.attendance.timeStarted}</Td>
        <Td>{props.attendance.timeEnded}</Td>
        <Td>{props.attendance.elapsedBreak}</Td>
        <Td>{props.attendance.overTime}</Td>
        <Td>{props.attendance.totalTime}</Td>
        <Td>
          {props.attendance.approved == 0 ? (
            <Badge colorScheme={'red'}>PENDING</Badge>
          ) : (
            <Badge colorScheme={'green'}>APPROVED</Badge>
          )}
        </Td>
      </Tr>
    </>
  );
}

EmployeeTableData.propTypes = {
  onOpen: PropTypes.any,
  ind: PropTypes.any,
  attendance: PropTypes.any,
};

export default EmployeeTableData;
