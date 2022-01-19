import React, { useState, useEffect } from 'react';
import {
  FiBell,
  FiChevronDown,
  FiMenu
} from 'react-icons/fi';
import {
  IconButton,
  Avatar,
  Spacer,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Link,
} from '@chakra-ui/react';
import {PropTypes} from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Header(props){

  const [userdb, setUserDB] = useState({})
  const { user, logout } = useAuth0();
  let navigate = useNavigate();

  function setData(){
    axios.get("http://localhost:8080/user/useremail/"+user.email).then((response) => {
      if(response.data.role && (response.data.role != "ADMIN" && response.data.role != "SUPERADMIN")){
        navigate("/", { replace: true });
      }
      setUserDB(response.data);
    });
  }

  useEffect(() => {
    if (user) {
       setData();
    }
  }, [user])

  return(
  <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >

      <Text
        display={{ base: 'none', md: 'flex' }}
        fontSize="2xl"
        fontFamily="lato"
        fontWeight="bold">
        {props.headerTitle}
      </Text>

      <Spacer display={{ base: 'none', md: 'flex' }}/>

      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={props.onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="xl"
        fontFamily="monospace"
        fontWeight="bold">
        {props.headerTitle}
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={user.picture}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{user.given_name} {user.family_name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {userdb.role}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <Link href={"/admin/profile/"+userdb.id}><MenuItem>Profile</MenuItem></Link>
              <MenuDivider/>
              <MenuItem onClick={()=>logout()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}

Header.propTypes={
  onOpen: PropTypes.any,headerTitle:PropTypes.any, userdb: PropTypes.any
}