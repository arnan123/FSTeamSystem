import React from 'react';
import Login from './pages/Login';
import Employee from './pages/Employee';
import Navbar from './components/Navbar';
import AdminDTR from './pages/AdminDTR';
import AdminHolidays from './pages/AdminHolidays';
import AdminHolidaysList from './pages/AdminHolidaysList';
import AdminEmployees from './pages/AdminEmployees';
import AdminTeams from './pages/AdminTeams';
import AdminDepartments from './pages/AdminDepartments';
import EmployeeDTR from "./pages/EmployeeDTR"
import EmployeeHoliday from "./pages/EmployeeHoliday"
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
  { name: 'Daily Time Record', icon: FiClock, address:"/admin/dtr"},
  { name: 'Departments', icon: FiGrid , address:"/admin/departments"  },
  { name: 'Employees', icon: FiUsers, address:"/admin/employees" },
  { name: 'Holidays', icon: FiWatch, address:"/admin/holidays" },
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
                <Route path="/admin/departments" element={<AdminDepartments onOpen={onOpen} isOpen={isOpen} onClose={onClose} LinkItems={LinkItems} />}/>
                <Route path="/admin/employees" element={<AdminEmployees onOpen={onOpen} isOpen={isOpen} onClose={onClose} LinkItems={LinkItems} />}/>
                <Route path="/admin/holidays" element={<AdminHolidays onOpen={onOpen} isOpen={isOpen} onClose={onClose} LinkItems={LinkItems} />}/>
                <Route path="/admin/holidays/list" element={<AdminHolidaysList onOpen={onOpen} isOpen={isOpen} onClose={onClose} LinkItems={LinkItems} />}/>
                <Route path="/admin/departments/teams" element={<AdminTeams onOpen={onOpen} isOpen={isOpen} onClose={onClose} LinkItems={LinkItems} />}/>
                
              </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
