import React from 'react';
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
} from 'react-icons/fi';
import NavItem from "./NavItem.js";
import {PropTypes} from 'prop-types';

const LinkItems = [
  { name: 'Daily Time Record', icon: FiClock, address:"/admin/dtr"},
  { name: 'Departments', icon: FiGrid , address:"/admin/departments"  },
  { name: 'Employees', icon: FiUsers, address:"/admin/employees" },
  { name: 'Holidays', icon: FiWatch, address:"/admin/holidays" },
];

export default function Sidebar ({onClose, ...rest }){

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