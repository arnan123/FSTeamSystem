import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import EmployeeTable from '../components/Employee/EmployeeTable';
import EmployeeTableMobile from '../components/Employee/EmployeeTableMobile';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

function EmployeeDTR() {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  return (
    <>
      <Helmet>
        <style>
          {`
            body {
                  background-color : #2a3b5e
                }
          `}
        </style>
        <title>FST DTR</title>
      </Helmet>

      <Box>
        <Box>
          <Box h={'10vh'}>
            <Button
              color={'white'}
              fontSize={'3xl'}
              leftIcon={<CalendarIcon />}
              variant={'ghost'}
              _hover={{ bgColor: ' #2a3b5e' }}>
              <Text>Daily Time Record</Text>
            </Button>
          </Box>
          {isLargerThan480 && <EmployeeTable />}
          {!isLargerThan480 && <EmployeeTableMobile />}
        </Box>
      </Box>
    </>
  );
}

export default EmployeeDTR;
