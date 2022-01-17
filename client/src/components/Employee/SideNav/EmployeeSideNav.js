import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  VStack,
  Spacer,
  Button,
  useMediaQuery,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { StarIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../Logo';
import EmployeeSideNavMobile from '../SideNav/EmployeeSideNavMobile';
function EmployeeSideNav(props) {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');

  if (isLargerThan1000) {
    return (
      <>
        <Box
          boxShadow={'2xl'}
          borderColor={props.color}
          w={'13vw'}
          h="full"
          bgColor={'#063970'}
          pos={'fixed'}
          display={'block'}>
          <VStack paddingTop={'10%'} spacing={'1vw'}>
            <Box>
              <HStack>
                <Logo maxW={'3vw'} />
                <Text fontSize={'1.5vw'}>FSTEAMS</Text>
              </HStack>
            </Box>
            <Divider />
            <Box p={5}>
              <Spacer />
              <VStack spacing={'10%'} p={3}>
                <Link to="/employees">
                  <Button
                    leftIcon={<TimeIcon />}
                    _hover={{
                      bgColor: 'blue.600',
                    }}
                    w={'10vw'}
                    h={'5vh'}
                    textAlign={'left'}
                    variant={'ghost'}
                    p={5}
                    fontSize={'1vw'}>
                    Time In/Out
                  </Button>
                </Link>

                <Link to="/employees/dtr">
                  <Button
                    leftIcon={<CalendarIcon />}
                    _hover={{
                      bgColor: 'blue.600',
                    }}
                    w={'10vw'}
                    h={'5vh'}
                    textAlign={'left'}
                    variant={'ghost'}
                    p={5}
                    fontSize={'1vw'}>
                    <Text fontSize={'1vw'} color="white">
                      User DTR
                    </Text>
                  </Button>
                </Link>

                <Link to="/employees/holiday">
                  <Button
                    leftIcon={<StarIcon w={'1vw'} h={'1vw'} />}
                    _hover={{
                      bgColor: 'blue.600',
                    }}
                    h={'5vh'}
                    w={'10vw'}
                    p={5}
                    variant={'ghost'}
                    textAlign={'left'}>
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
