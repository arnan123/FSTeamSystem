import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import Login from './pages/Login';
import EmployeeTimeinPage from './pages/EmployeeTimeinPage';
import AdminDTR from './pages/AdminDTR';
import AdminHolidays from './pages/AdminHolidays';
import AdminHolidaysList from './pages/AdminHolidaysList';
import AdminEmployees from './pages/AdminEmployees';
import AdminTeams from './pages/AdminTeams';
import AdminDepartments from './pages/AdminDepartments';
import AdminProfile from './pages/AdminProfile';
import EmployeeDTR from './pages/EmployeeDTR';
import EmployeeHoliday from './pages/EmployeeHoliday';
import EmployeeHolidayList from './pages/EmployeeHolidayList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { FiWatch, FiGrid, FiUsers, FiClock } from 'react-icons/fi';
import '../src/App.css';

const LinkItems = [
  { name: 'Daily Time Record', icon: FiClock, address: '/' },
  { name: 'Departments', icon: FiGrid, address: '/departments' },
  { name: 'Employees', icon: FiUsers, address: '/employees' },
  { name: 'Holidays', icon: FiWatch, address: '/holidays' },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { seconds, minutes, hours, isRunning, start, pause } = useStopwatch({
    autoStart: false,
  });
  const {
    seconds: lunchseconds,
    minutes: lunchminutes,
    hours: lunchhours,
    isRunning: isLunchRunning,
    start: lunchStart,
    pause: lunchPause,
  } = useStopwatch({
    autoStart: false,
  });

  const lunchTimer = {
    lunchseconds,
    lunchminutes,
    lunchhours,
    isLunchRunning,
    lunchStart,
    lunchPause,
  };

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/employees"
            element={
              <EmployeeTimeinPage
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                isrunning={isRunning}
                start={start}
                pause={pause}
                lunchTimer={lunchTimer}
              />
            }
          />
          <Route
            path="/employees/dtr"
            element={
              <EmployeeDTR
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                isrunning={isRunning}
                start={start}
                pause={pause}
              />
            }
          />
          <Route path="/employees/holiday" element={<EmployeeHoliday />} />
          <Route
            path="/employees/holidayList"
            element={<EmployeeHolidayList />}
          />
          <Route
            path="/admin/dtr"
            element={
              <AdminDTR
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
              />
            }
          />
          <Route
            path="/admin/departments"
            element={
              <AdminDepartments
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
              />
            }
          />
          <Route
            path="/admin/employees"
            element={
              <AdminEmployees
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
              />
            }
          />
          <Route
            path="/admin/holidays"
            element={
              <AdminHolidays
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
              />
            }
          />
          <Route
            path="/admin/holidays/list"
            element={
              <AdminHolidaysList
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
              />
            }
          />
          <Route
            path="/admin/departments/:id"
            element={
              <AdminTeams
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
              />
            }
          />
          <Route
            path="/admin/profile/:id"
            element={
              <AdminProfile
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
