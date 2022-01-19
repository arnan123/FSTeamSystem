import React, { useState, useEffect } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import {
  FiWatch,
  FiGrid,
  FiUsers,
  FiClock,
  FiDatabase
} from 'react-icons/fi';
import NavItem from "./NavItem.js";
import {PropTypes} from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export default function Sidebar ({onClose, ...rest }){

  const { user } = useAuth0();
  const [LinkItems, setLinkItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/user/useremail/"+user.email).then((response) => {
      if(response.data.role && response.data.role != "SUPERADMIN"){
        setLinkItems([
          { name: 'Daily Time Record', icon: FiClock, address:"/admin/dtr"},
          { name: 'Departments', icon: FiGrid , address:"/admin/departments"  },
          { name: 'Employees', icon: FiUsers, address:"/admin/employees" },
          { name: 'Holidays', icon: FiWatch, address:"/admin/holidays" },
        ]);
      }
      else{
        setLinkItems([
          { name: 'Daily Time Record', icon: FiClock, address:"/admin/dtr"},
          { name: 'Departments', icon: FiGrid , address:"/admin/departments"  },
          { name: 'Employees', icon: FiUsers, address:"/admin/employees" },
          { name: 'Holidays', icon: FiWatch, address:"/admin/holidays" },
          { name: 'Generate Reports', icon: FiDatabase, address: '/admin/generatereports' },
        ]);
      }
    });
  }, [])

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          FSTEAMS
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} address={link.address}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

Sidebar.propTypes={
  onClose:PropTypes.any
}