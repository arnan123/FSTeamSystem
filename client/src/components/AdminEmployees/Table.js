import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'

export default function TableData(){
  const data = React.useMemo(
    () => [
      {
        name: 'Rayl Xylem',
        department: 'Department 1',
        team: 'Team 1',
        status:'Probationary',
      },
      {
        name: 'Rayl Xylem',
        department: 'Department 1',
        team: 'Team 1',
        status:'Probationary',
      },
      {
        name: 'Rayl Xylem',
        department: 'Department 1',
        team: 'Team 1',
        status:'Probationary',
      },
      {
        name: 'Rayl Xylem',
        department: 'Department 1',
        team: 'Team 1',
        status:'Probationary',
      },
      {
        name: 'Rayl Xylem',
        department: 'Department 1',
        team: 'Team 1',
        status:'Probationary',
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
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Team',
        accessor: 'team',
      },
      {
        Header: 'Status',
        accessor: 'status',
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