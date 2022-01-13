import { Box, VStack, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import EmployeeTableMobileData from './EmployeeTableMobileData';
import ModalContainer from '../../ModalContainer';

function EmployeeTableMobile() {
  const [indicator, setIndicator] = useState(false);

  return (
    <>
      <Center>
        <Box>
          <VStack>
            <ModalContainer
              buttoncolor="blue"
              buttontext="Edit"
              header="Edit Content"
              content="are you sure you want to edit the data"
              setIndicator={setIndicator}
              indicator={indicator}
            />
            <Box paddingBottom={5} boxShadow={'2xl'}>
              <EmployeeTableMobileData ind={indicator} />
            </Box>
            <Box paddingBottom={5}>
              <EmployeeTableMobileData />
            </Box>
            <Box paddingBottom={5}>
              <EmployeeTableMobileData />
            </Box>
            <Box paddingBottom={5}>
              <EmployeeTableMobileData />
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
}

export default EmployeeTableMobile;
