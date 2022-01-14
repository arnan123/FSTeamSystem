import React, { useState, useMemo, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import axios from 'axios'
import moment from 'moment'

export default function TableData(){

  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/holiday/viewHoliday").then((response) => {
      setHolidays(response.data);
    });
  },[]);

  const data = useMemo(
    () => 
      holidays.map((holiday)=>(
        { 
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

  return (
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
                  {(cell.column.id == "holidayDate")? moment(cell.value).format("MMMM D"):cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}