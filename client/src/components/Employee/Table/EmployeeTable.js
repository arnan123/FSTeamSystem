import {
  Box,
  ButtonGroup,
  Flex,
  Select,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';
import ModalContainer from '../../ModalContainer';
import React, { useState } from 'react';
import EditableCell from '../../EditableCell';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { CalendarIcon } from '@chakra-ui/icons';

function EmployeeTable() {
  const [ind, setInd] = useState(false);

  return (
    <>
      <Box paddingBottom={5}>
        <Box>
          <Center>
            <Flex w={'60vw'}>
              <Box>
                <ButtonGroup gap={1}>
                  <Select
                    placeholder="Select Date"
                    variant={'outline'}
                    color={'black'}
                    bg={'white'}>
                    <option>Hello</option>
                  </Select>
                  <Select
                    placeholder="Select Date"
                    variant={'outline'}
                    color={'black'}
                    bg={'white'}>
                    <option>Hello</option>
                  </Select>
                </ButtonGroup>
              </Box>
              <Spacer />
              <Box>
                <ModalContainer
                  buttoncolor="blue"
                  buttontext="Edit"
                  header="Edit Content"
                  content="are you sure you want to edit the data"
                  setIndicator={setInd}
                  indicator={ind}
                />
              </Box>
            </Flex>
          </Center>
        </Box>
      </Box>
      <Box>
        <Table variant="simple" w={'50vw'} size={'sm'} color={'white'}>
          <Thead>
            <Tr bgColor={'gray'} borderRadius={10}>
              <Th>Time in</Th>
              <Th>Time out</Th>
              <Th>Lunch</Th>
              <Th>Overtime</Th>
              <Th>Total Hours</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <EditableCell indicator={ind} tableContent="9:00 AM" />
              </Td>
              <Td>
                <EditableCell indicator={ind} tablecontent="8:00 PM" />
              </Td>
              <Td>
                <EditableCell indicator={ind} tablecontent="8:00 PM" />
              </Td>
              <Td>
                <EditableCell indicator={ind} tablecontent="8:00 PM" />
              </Td>
              <Td>
                <EditableCell indicator={ind} tablecontent="8:00 PM" />
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </>
  );
}

export default EmployeeTable;
