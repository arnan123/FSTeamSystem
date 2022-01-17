import React, { useState, useEffect, useMemo } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Checkbox, Input, Box, Link } from '@chakra-ui/react'
import { useTable, useSortBy } from 'react-table'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import axios from 'axios';
import AddModal from '../AdminEmployees/AddModal';
import DeleteModal from '../AdminEmployees/DeleteModal';
import Search from './Search';

export default function TableData(){
  const [employees, setEmployees] = useState([]);
  const [ids, setIds] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/admin/view").then((response) => {
      setEmployees(response.data);
    });
  },[]);

  function idsreturn(ischecked,value){
    if(ischecked==true){
      setIds(ids+value)
    }
    else{
      setIds(ids.replace(value,""))
    }
  }

  const data = useMemo(
    () => 
      employees.map((employee)=>(
        { 
          id: employee.id,
          name: employee.firstName+' '+employee.lastName,
          email: employee.email,
          role: employee.role,
          status: employee.status,
        }
      )),
    [employees],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Employee Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Status',
        accessor: 'status',
      }
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
      <>
        <Box display="block" py="4vh" >
            <AddModal/>
            <DeleteModal ids={ids} setEmployees={setEmployees}/>
        </Box>
        <Box px="16vh" mb="4vh">
          <Search setEmployees={setEmployees}/>
        </Box>
        <Table px="4vh" {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr key="" {...headerGroup.getHeaderGroupProps()}>
                
                {headerGroup.headers.map((column) => (
                  <Th key=""
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.render('Header')}
                    <chakra.span pl='4'>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label='sorted descending' />
                        ) : (
                          <TriangleUpIcon aria-label='sorted ascending' />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr key={row.original.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td key="" {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                      {(cell.column.id == "name")?<Checkbox onChange={e=>idsreturn(e.target.checked,e.target.value)} value={cell.row.original.id+","}><Link href={"/admin/profile/"+cell.row.original.id}>{cell.value}</Link></Checkbox>:null}
                      {(cell.column.id == "email")? cell.value:null}
                      {(cell.column.id == "role")? cell.value:null}
                      {(cell.column.id == "status")? cell.value:null}                 
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
        <Input display="none" value={ids} onChange={(e)=>setIds(e.target.value)}/>
      </>
  );
}