import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'

export default function TableData(){
  const data = React.useMemo(
    () => [
      {
        holidayname: 'New Year',
        holidaytype: 'Global',
        holidaydate: 'January 1',
      },
      {
        holidayname: 'Christmas Day',
        holidaytype: 'Global',
        holidaydate: 'January 1',
      },
      {
        holidayname: "The Emperor's Birthday",
        holidaytype: 'Japan',
        holidaydate: 'February 23',
      },
      {
        holidayname: 'Rizal Day',
        holidaytype: 'Philippines',
        holidaydate: 'December 30',
      },
      {
        holidayname: 'Bonifacio Day',
        holidaytype: 'Philippines',
        holidaydate: 'November 30',
      }, 
    ],
    [],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Holiday Name',
        accessor: 'holidayname',
      },
      {
        Header: 'Holiday Type',
        accessor: 'holidaytype',
      },
      {
        Header: 'Holiday Date',
        accessor: 'holidaydate',
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
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}