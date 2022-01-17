import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { useAuth0 } from '@auth0/auth0-react';
import EmployeeSideNav from '../components/Employee/SideNav/EmployeeSideNav';
import EmployeeHeader from '../components/Employee/Header/EmployeeHeader';
import Profile from '../components/Employee/Profile/Profile';
import axios from 'axios';

function EmployeeProfile(props) {
  const { user } = useAuth0();
  const [logs, setLogs] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/log/getUserLogs/' + props.userData.id)
      .then((response) => {
        setLogs(response.data);
      });
  }, []);

  if (props.isAuthenticated == false) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
      <Helmet>
        <style>
          {`
            body {
                  background-color : #2a3b5e
                }
          `}
        </style>
        <title>{user.family_name} Profile</title>
      </Helmet>
      <EmployeeSideNav color="gray" />
      <EmployeeHeader text="TIMER" />
      <Box>
        <Profile logs={logs} userData={props.userData} />
      </Box>
    </Box>
  );
}

EmployeeProfile.propTypes = {
  isAuthenticated: PropTypes.any,
  userData: PropTypes.any,
};

export default EmployeeProfile;
