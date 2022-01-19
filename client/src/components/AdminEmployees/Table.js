import React, { useState, useEffect, useMemo } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Checkbox, Input, Box, Link } from '@chakra-ui/react'
import { useTable, useSortBy } from 'react-table'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import axios from 'axios';
import AddModal from '../AdminEmployees/AddModal';
import DeleteModal from '../AdminEmployees/DeleteModal';
import Search from './Search';
import { useAuth0 } from '@auth0/auth0-react';

export default function TableData(){
  const [employees, setEmployees] = useState([]);
  const [ids, setIds] = useState("");
  const { user }=useAuth0();

  useEffect(() => {
    axios.get("http://localhost:8080/user/useremail/"+user.email).then((response) => {
      if(response.data.role == 'SUPERADMIN'){
        axios.get("http://localhost:8080/admin/view").then((response) => {
          setEmployees(response.data);
        });
      }
      else{
        axios.get("http://localhost:8080/admin/viewByDepartment/"+response.data.department.id).then((response) => {
          setEmployees(response.data);
        });
      }
    });
  }, [])

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
  const [checkedItems, setCheckedItems] = useState([])
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
        <Box px="8vh" overflowX="auto" height="50vh">
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr key="" {...headerGroup.getHeaderGroupProps()}>
                
                {headerGroup.headers.map((column) => (
                  <Th key=""
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.id=="name"?
                    <Checkbox
                      isChecked={
                        checkedItems.length ===
                        employees.map(employees => employees.id).length
                      }
                      onChange={() => {
                        const employeesIds = employees.map(employee => employee.id);
                        if (checkedItems.length === employeesIds.length) {
                          setCheckedItems([]);
                          setIds("");
                        } else {
                          setCheckedItems(employeesIds);
                          setIds(employees.map(employee => employee.id))
                        }
                      }}
                    >
                      {column.id}
                    </Checkbox>:column.id}
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
                      {(cell.column.id == "name")?
                      <Checkbox
                        isChecked={checkedItems.includes(cell.row.original.id)}
                        onChange={event => {
                          event.stopPropagation();
                          const index = checkedItems.indexOf(cell.row.original.id);
      
                          if (index > -1) {
                            setCheckedItems([
                              ...checkedItems.slice(0, index),
                              ...checkedItems.slice(index + 1)
                            ]);
                          } else {
                            setCheckedItems([
                              ...checkedItems,
                              cell.row.original.id
                            ]);
                          }
                          idsreturn(event.target.checked, event.target.value)
                        }}
                       value={cell.row.original.id+","}><Link href={"/admin/profile/"+cell.row.original.id}>{cell.value}</Link></Checkbox>:null}
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
        </Box>
        <Input value={ids} onChange={(e)=>setIds(e.target.value)}/>
      </>
  );
}