import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import EmployeeTable from '../components/Employee/Table/EmployeeTable';
import EmployeeTableMobile from '../components/Employee/Table/EmployeeTableMobile';
import EmployeeSideNav from '../components/Employee/SideNav/EmployeeSideNav';
import EmployeeHeader from '../components/Employee/Header/EmployeeHeader';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from '@chakra-ui/react';
import PropTypes from 'prop-types';

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
        <EmployeeSideNav color="gray" />
        <EmployeeHeader text="Daily Time Record" />
        <VStack>
          <Box h={'10vh'}></Box>
          {isLargerThan480 && <EmployeeTable />}
          {!isLargerThan480 && <EmployeeTableMobile />}
        </VStack>
      </Box>
    </>
  );
}

EmployeeDTR.propTypes = {
  seconds: PropTypes.any,
  minutes: PropTypes.any,
  hours: PropTypes.any,
  isrunning: PropTypes.any,
  start: PropTypes.any,
  pause: PropTypes.any,
};

export default EmployeeDTR;
