import React, { useEffect, useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuGroup,
  MenuDivider,
  Box,
  VStack,
  Link,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'

export default function AvatarProfile() {
  const { logout , user } = useAuth0();
  const [userdb, setUserDB] = useState({});
  
  useEffect(() => {
    axios.get("http://localhost:8080/user/useremail/"+user.email).then((response) => {
      setUserDB(response.data);
    });
  },[]);

  return (
    <>
      <Box>
        <Menu>
          <MenuButton>
            <Avatar
              size={'sm'}
              src={user.picture}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem fontSize={'sm'}>
                <VStack alignItems={'left'}>
                  <Box> {user.given_name} {user.family_name} </Box>
                   <Box>{user.email}</Box> 
                  <Box>(Software Engineer)</Box>
                </VStack>
              </MenuItem>
              {(userdb.role=="ADMIN")?<Link href="/admin/dtr"><MenuItem fontSize={'sm'}>Admin</MenuItem></Link>:null}
              <MenuDivider />
              <MenuItem
                fontSize={'sm'}
                alignSelf={'center'}
                _hover={{ bgGradient: 'linear(to-r, #b075ff, #37b8ff)' }}
                onClick={logout}>
                Logout
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
