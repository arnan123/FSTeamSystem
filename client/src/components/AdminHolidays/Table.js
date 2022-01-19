import React, { useState, useMemo, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Checkbox, Input, Box } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import axios from 'axios'
import moment from 'moment'
import AddModal from './AddModal';
import DeleteModal from './DeleteModal';

export default function TableData(){

  const [holidays, setHolidays] = useState([]);
  const [ids, setIds] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/holiday/viewHoliday").then((response) => {
      setHolidays(response.data);
    });
  },[]);

  const data = useMemo(
    () => 
      holidays.map((holiday)=>(
        { 
          id: holiday.id,
          holidayName: holiday.name,
          holidayType: holiday.holidayType,
          holidayDate: holiday.holidayDate
        }
      )),
    [holidays],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Holiday Name',
        accessor: 'holidayName',
      },
      {
        Header: 'Holiday Type',
        accessor: 'holidayType',
      },
      {
        Header: 'Holiday Date',
        accessor: 'holidayDate',
      }
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  function idsreturn(ischecked,value){
    if(ischecked==true){
      setIds(ids+value)
    }
    else{
      setIds(ids.replace(value,""))
    }
  }

  return (
    <>
    <Box display="block" py="4vh"  >
          <AddModal setHolidays={setHolidays}/>
          <DeleteModal setHolidays={setHolidays} ids={ids}/>
    </Box>
    <Box overflowX="auto" height="50vh">
    <Table {...getTableProps()}>
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
            
              <Tr key="" {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td key="" {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    {(cell.column.id == "holidayDate")? moment(cell.value).format("MMMM D"):null}
                    {(cell.column.id == "holidayName")? <Checkbox onChange={e=>idsreturn(e.target.checked,e.target.value)} value={cell.row.original.id+","}>{cell.value}</Checkbox>:null}
                    {(cell.column.id == "holidayType")? cell.value:null}
                  </Td>
                ))}
              </Tr>
          )
        })}
      </Tbody>
    </Table>
    </Box>
    <Input display="none" value={ids} onChange={(e)=>setIds(e.target.value)}/>
    </>
  )
}