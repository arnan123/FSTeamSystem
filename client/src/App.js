import React from 'react';
import Login from './pages/Login';
import Employee from './pages/Employee';
import Navbar from './components/Navbar';
import EmployeeDTR from './pages/EmployeeDTR';
import EmployeeHoliday from './pages/EmployeeHoliday';
import AdminDTR from "./pages/AdminDTR";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import {
  FiWatch,
  FiGrid,
  FiUsers,
  FiClock,
} from 'react-icons/fi';
import { useAuth0 } from '@auth0/auth0-react';

const LinkItems = [
  { name: 'Daily Time Record', icon: FiClock, address:"/"},
  { name: 'Departments', icon: FiGrid , address:"/departments"  },
  { name: 'Employees', icon: FiUsers, address:"/employees" },
  { name: 'Holidays', icon: FiWatch, address:"/holidays" },
];

function App() {
  const { isAuthenticated } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <ChakraProvider>
      <BrowserRouter>
          {isAuthenticated && <Navbar />}
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/employees/dtr" element={<EmployeeDTR />} />
                <Route
                  path="/employees/holiday"
                  element={<EmployeeHoliday />}
                />
                <Route path="/admin/dtr" element={<AdminDTR onOpen={onOpen} isOpen={isOpen} onClose={onClose} LinkItems={LinkItems} />}/>
              </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
