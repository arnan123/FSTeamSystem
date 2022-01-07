import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'

export default function TableData(){
  const data = React.useMemo(
    () => [
      {
        name: 'Rayl Xylem',
        timein: '09:00',
        timeout: '18:00',
        lunch:'1:00',
        overtime: '2:00'
      },
      {
        name: 'Rayl Xylem',
        timein: '09:00',
        timeout: '18:00',
        lunch:'1:00',
        overtime: '2:00'
      },
      {
        name: 'Rayl Xylem',
        timein: '09:00',
        timeout: '18:00',
        lunch:'1:00',
        overtime: '2:00'
      },
      {
        name: 'Rayl Xylem',
        timein: '09:00',
        timeout: '18:00',
        lunch:'1:00',
        overtime: '2:00'
      },
      {
        name: 'Rayl Xylem',
        timein: '09:00',
        timeout: '18:00',
        lunch:'1:00',
        overtime: '2:00'
      }, 
    ],
    [],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Time In',
        accessor: 'timein',
      },
      {
        Header: 'Time Out',
        accessor: 'timeout',
      },
      {
        Header: 'Lunch',
        accessor: 'lunch',
      },
      {
        Header: 'Overtime',
        accessor: 'overtime',
      },
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