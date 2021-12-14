import React from 'react';
import Login from './pages/Login';
import Employee from './pages/Employee';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, VStack, Box } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box textAlign="center" fontSize="xl" p={4}>
          {isAuthenticated && <Navbar />}

          <VStack spacing={10}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/employees" element={<Employee />} />
              <Route path="/employees/dtr" element={<Home />} />
            </Routes>
          </VStack>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
