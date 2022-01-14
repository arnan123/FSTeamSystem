import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  VStack,
  Spacer,
  Button,
  Divider,
  useMediaQuery,
} from '@chakra-ui/react';
import { StarIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../Logo';
import EmployeeSideNavMobile from '../SideNav/EmployeeSideNavMobile';
function EmployeeSideNav(props) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  if (isLargerThan800) {
    return (
      <>
        <Box
          borderRight={'1px'}
          boxShadow={'2xl'}
          borderColor={props.color}
          // w={{ base: 'full', md: 60 }}
          w={'15vw'}
          h="full"
          position={'fixed'}
          display={'block'}>
          <VStack paddingTop={'10%'} spacing={10}>
            <Box>
              <VStack>
                <Logo maxW={'10vw'} />
                <Text fontSize={'2vw'}>FSTEAMS</Text>
              </VStack>
            </Box>

            <Box>
              <Spacer />
              <VStack spacing={3} alignItems={'left'}>
                <Link to="/employees">
                  <Button
                    leftIcon={<TimeIcon />}
                    _hover={{
                      bgGradient: 'linear(to-r,  #37b8ff ,#b075ff)',
                    }}
                    w={'10vw'}
                    variant={'ghost'}>
                    <Text fontSize={'1vw'} color="white">
                      Time In/Out
                    </Text>
                  </Button>
                </Link>

                <Divider bgColor={'gray'} w={'10vw'} />
                <Link to="/employees/dtr">
                  <Button
                    leftIcon={<CalendarIcon />}
                    _hover={{
                      bgGradient: 'linear(to-r,  #37b8ff ,#b075ff)',
                    }}
                    w={'10vw'}
                    variant={'ghost'}>
                    <Text fontSize={'1vw'} color="white">
                      User DTR
                    </Text>
                  </Button>
                </Link>

                <Divider bgColor={'gray'} w={'10vw'} />
                <Link to="/employees/holiday">
                  <Button
                    leftIcon={<StarIcon />}
                    _hover={{
                      bgGradient: 'linear(to-r,  #37b8ff ,#b075ff)',
                    }}
                    w={'10vw'}
                    variant={'ghost'}>
                    <Text fontSize={'1vw'} color="white">
                      Holiday
                    </Text>
                  </Button>
                </Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </>
    );
  } else {
    return <EmployeeSideNavMobile />;
  }
}

EmployeeSideNav.propTypes = {
  color: PropTypes.any,
};

export default EmployeeSideNav;
