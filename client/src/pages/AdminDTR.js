import React, {useEffect} from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Table from '../components/AdminDTR/Table'

export default function AdminDTR(props){
  useEffect(() => {
    document.title="Daily Time Record";
  });
  return (
    <ChakraProvider theme={theme}>
      <Sidebar
        onClose={() => props.onClose}
        LinkItems={props.LinkItems}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={props.isOpen}
        placement="left"
        onClose={props.onClose}
        returnFocusOnClose={false}
        onOverlayClick={props.onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={props.onClose} LinkItems={props.LinkItems} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={props.onOpen} headerTitle={"Daily Time Record"}/>
    <Box
      minHeight="full"
      ml={{ base: 0, md: 60 }}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
      <Table/>
    </Box>
    </ChakraProvider>
  );
}

AdminDTR.propTypes={
  onClose: PropTypes.any, isOpen: PropTypes.any, onOpen: PropTypes.any, LinkItems: PropTypes.any
}