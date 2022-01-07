import React from 'react';
import Login from './pages/Login';
import Employee from './pages/Employee';
import Navbar from './components/Navbar';
import EmployeeDTR from './pages/EmployeeDTR';
import EmployeeHoliday from './pages/EmployeeHoliday';
import { useMediaQuery } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, VStack, Box } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box textAlign="center" fontSize="xl" p={4}>
          {isAuthenticated && <Navbar />}
          <VStack spacing={10}>
            <Box paddingTop={isLargerThan800 ? '5%' : '15%'}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/employees/dtr" element={<EmployeeDTR />} />
                <Route
                  path="/employees/holiday"
                  element={<EmployeeHoliday />}
                />
              </Routes>
            </Box>
          </VStack>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
