import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, HStack} from '@chakra-ui/react'
import axios from 'axios';
import { PropTypes } from 'prop-types'
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

export default function TableData(){
  const [logs, setLogs] = useState([]);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/log/viewLogs").then((response) => {
      setLogs(response.data);
      console.log(response.data)
    });
  },[]);
  useEffect(() => {
    axios.get("http://localhost:8080/admin/view").then((response) => {
      setEmployees(response.data);
      console.log(response.data)
    });
  },[]);
  return(
    <Box maxH="60vh" p="5" overflowY="auto">
      <Table>
        <Thead>
          <Tr>
            <Th>Employee</Th>
            <Th>Time Started</Th>
            <Th>Time Ended</Th>
            <Th>Elapsed Break</Th>
            <Th>Undertime</Th>
            <Th>Overtime</Th>
            <Th>Tardiness</Th>
          </Tr>
        </Thead>
        <Tbody>
          {logs.map((log)=>(
            <Tr key={log.id}>
              {employees.map((employee)=>(
                  (employee.id == log.user.id)?<Td key={employee.id}>{employee.firstName} {employee.lastName}</Td> : null
              ))}
              <Td>{log.timeStarted}</Td>
              <Td>{log.timeEnded}</Td>
              <Td>{log.elapsedBreak}</Td>
              <Td>{log.underTime}</Td>
              <Td>{log.overTime}</Td>
              <Td>{log.tardiness}</Td>
              <Td>
                <HStack>
                  <HiCheckCircle size="4vh" color='lime'/>
                  <HiXCircle size="4vh" color='red'/>
                </HStack>
              </Td>
              <Td></Td>
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