import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Spinner,
  MenuGroup,
  MenuDivider,
  Box,
  VStack,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

export default function AvatarProfile() {
  const { isLoading, logout } = useAuth0();

  if (isLoading) {
    return <Spinner size={'md'} />;
  }
  return (
    <>
      <Box>
        <Menu>
          <MenuButton>
            <Avatar
              size={'sm'}
              // src={user.picture}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem fontSize={'sm'}>
                <VStack alignItems={'left'}>
                  <Box>{/* {user.given_name} {user.family_name} */}</Box>
                  {/* <Box>{user.email}</Box> */}
                  <Box>(Software Engineer)</Box>
                </VStack>
              </MenuItem>
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
