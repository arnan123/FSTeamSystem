import { Box, VStack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
// import EmployeeTimer from '../components/Employee/EmployeeTimer';
// import Timers from '../components/Employee/Timers';
import Timer2 from '../components/Employee/Timer2';

function Employee() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Box textAlign="center" fontSize="xl" p={4}>
      <VStack spacing={10}>
        <Box paddingTop={isLargerThan800 ? '5%' : '15%'}>
          {/* <Helmet
            bodyAttributes={{
              style:{
                'background:url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")',
            
              }
                style: 'background-repeat:no-repeat',
            }}
          /> */}
          <Helmet>
            <style>
              {`
                body {
                      background-color : #2a3b5e

                    }
              `}
            </style>
            <title> FST Time/Out Page</title>
          </Helmet>

          <Box>
            {/* <EmployeeTimer /> */}
            <Timer2 />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default Employee;
