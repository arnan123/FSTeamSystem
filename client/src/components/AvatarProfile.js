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
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

export default function AvatarProfile() {
  const { user, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <Spinner size={'md'} />;
  }
  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar size={'sm'} src={user.picture} alt={user.name} />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              {user.given_name} {user.family_name} (Software Engineer)
            </MenuItem>
            <MenuDivider />
            <MenuItem
              _hover={{ bgGradient: 'linear(to-r, #b075ff, #37b8ff)' }}
              onClick={logout}>
              Logout
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}
