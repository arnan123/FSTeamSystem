import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Link } from '@chakra-ui/react'
import axios from 'axios';

export default function TableData(){
  const [employees,setEmployees] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/admin/view").then((response) => {
      setEmployees(response.data);
    });
  },[]);
  return(
    <Box maxH="60vh" p="5" overflowY="auto">
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee)=>(
            <Tr key={employee.id}>
              <Td><Link href={"/admin/profile/"+employee.id}>{employee.firstName} {employee.lastName}</Link></Td>
              <Td>{employee.email}</Td>
              <Td>{employee.role}</Td>
              <Td>{employee.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}