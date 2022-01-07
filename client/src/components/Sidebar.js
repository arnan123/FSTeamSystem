import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Avatar
} from '@chakra-ui/react';
import {PropTypes} from 'prop-types';
import NavItem from "./NavItem.js";

export default function Sidebar (props,{...rest}){
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="7vh" justifyContent="space-between">
        <Avatar name='Full Speed Tech' size="sm" src='https://bit.ly/tioluwani-kolawole' />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          FSTEAMS
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={props.onClose} />
      </Flex>
      {props.LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} address={link.address}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

Sidebar.propTypes={
  onClose:PropTypes.any, LinkItems: PropTypes.any
}