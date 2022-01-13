import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box} from '@chakra-ui/react'
import axios from 'axios';
import { PropTypes } from 'prop-types'

export default function TableData({id}){
  const [attendances, setAttendances] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/attendance/viewDTR/"+id).then((response) => {
      setAttendances(response.data);
      console.log(response.data)
    });
  },[]);
  return(
    <Box maxH="60vh" p="5" overflowY="auto">
      <Table>
        <Thead>
          <Tr>
            <Th>Time Started</Th>
            <Th>Time Ended</Th>
            <Th>Elapsed Break</Th>
            <Th>Undertime</Th>
            <Th>Overtime</Th>
            <Th>Tardiness</Th>
          </Tr>
        </Thead>
        <Tbody>
          {attendances.map((attendance)=>(
            <Tr key={attendance.id}>
              <Td>{attendance.timeStarted}</Td>
              <Td>{attendance.timeEnded}</Td>
              <Td>{attendance.elapsedBreak}</Td>
              <Td>{attendance.underTime}</Td>
              <Td>{attendance.overTime}</Td>
              <Td>{attendance.tardiness}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

TableData.propTypes={
  id: PropTypes.any
}