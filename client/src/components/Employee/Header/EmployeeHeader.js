import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Center,
  Flex,
  HStack,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import AvatarProfile from '../../AvatarProfile';
import NotificationBell from '../../NotificationBell';

function EmployeeHeader(props) {
  const [isLargerThan800] = useMediaQuery('(min-width: 1000px)');
  const { user } = useAuth0();

  return (
    <Center paddingLeft={'10%'} paddingTop={'2%'}>
      <Flex w={'78vw'} height="20" alignItems="center">
        {!isLargerThan800 && <Spacer />}
        <Box>
          <Text fontSize={isLargerThan800 ? '3vw' : '7vw'} fontWeight={'bold'}>
            {props.text}
          </Text>
        </Box>
        <Spacer />

        <Box>
          <HStack>
            <NotificationBell count={2} />
            <AvatarProfile
              size={isLargerThan800 ? 'md' : 'sm'}
              setUserData={props.setUserData}
            />
            {isLargerThan800 && (
              <Text fontSize={'xl'}>
                {user.family_name},{user.given_name}
              </Text>
            )}
          </HStack>
        </Box>
      </Flex>
    </Center>
  );
}

EmployeeHeader.propTypes = {
  color: PropTypes.any,
  text: PropTypes.any,
  setUserData: PropTypes.any,
};

export default EmployeeHeader;
