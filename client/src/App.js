import React, { useState } from 'react';
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
import GenerateReport from './pages/GenerateReport';
import EmployeeProfile from './pages/EmployeeProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { FiWatch, FiGrid, FiUsers, FiClock } from 'react-icons/fi';
import { useAuth0 } from '@auth0/auth0-react';
import '../src/App.css';
import Loading from './pages/Loading';

const LinkItems = [
  { name: 'Daily Time Record', icon: FiClock, address: '/' },
  { name: 'Departments', icon: FiGrid, address: '/departments' },
  { name: 'Employees', icon: FiUsers, address: '/employees' },
  { name: 'Holidays', icon: FiWatch, address: '/holidays' },
  { name: 'Generate Reports', icon: FiWatch, address: '/generatereports' },
];

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();
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
  const [userDatas, setUserDatas] = useState({});

  if (isLoading) {
    return (
      <ChakraProvider>
        <Loading />
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login isAuthenticated={isAuthenticated} />}
          />
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
                userData={userDatas}
                setUserData={setUserDatas}
                lunchTimer={lunchTimer}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/employees/dtr"
            element={
              <EmployeeDTR
                userData={userDatas}
                isAuthenticated={isAuthenticated}
                setUserData={setUserDatas}
              />
            }
          />
          <Route
            path="/employees/holiday"
            element={
              <EmployeeHoliday
                isAuthenticated={isAuthenticated}
                setUserData={setUserDatas}
              />
            }
          />

          <Route
            path="/employees/profile"
            element={
              <EmployeeProfile
                isAuthenticated={isAuthenticated}
                userData={userDatas}
              />
            }
          />

          <Route
            path="/admin/dtr"
            element={
              <AdminDTR
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/admin/generatereports"
            element={
              <GenerateReport
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                LinkItems={LinkItems}
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
