import React from 'react';
import PropTypes from 'prop-types';
import EditableCell from '../EditableCell';
import { Box, Tr, Th, Table, Tbody, Td } from '@chakra-ui/react';

function EmployeeTableMobileData(props) {
  return (
    <>
      <Box>
        <Table variant="simple" size={'sm'}>
          <Tr>
            <Th>To convert</Th>
            <Td>
              <EditableCell indicator={props.ind} tableContent="10:00" />
            </Td>
          </Tr>
          <Tbody color={'white'}>
            <Tr>
              <Th color={'white'}>inches</Th>
              <Td>millimetres (mm)</Td>
            </Tr>
            <Tr>
              <Th>feet</Th>
              <Td>centimetres (cm)</Td>
            </Tr>
            <Tr>
              <Th>yards</Th>
              <Td>metres (m)</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

EmployeeTableMobileData.propTypes = {
  tableData: PropTypes.string,
  ind: PropTypes.bool,
};

export default EmployeeTableMobileData;
