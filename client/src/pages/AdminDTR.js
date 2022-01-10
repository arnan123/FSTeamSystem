import React, {useEffect} from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {
  FiWatch,
  FiGrid,
  FiUsers,
  FiClock,
} from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Table from '../components/AdminDTR/Table'

const LinkItems = [
  { name: 'Daily Time Record', icon: FiClock, address:"/"},
  { name: 'Departments', icon: FiGrid , address:"/departments"  },
  { name: 'Employees', icon: FiUsers, address:"/employees" },
  { name: 'Holidays', icon: FiWatch, address:"/holidays" },
];

export default function AdminDTR(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    document.title="Daily Time Record";
  });
  return (
    <ChakraProvider theme={theme}>
      <Sidebar
        onClose={() => onClose}
        LinkItems={LinkItems}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} LinkItems={LinkItems} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} headerTitle={"Daily Time Record"}/>
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