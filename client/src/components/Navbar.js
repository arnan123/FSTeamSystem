import React from 'react';
import { Box, HStack, Grid, GridItem } from '@chakra-ui/react';
import EmployeeDrawer from './Employee/EmployeeDrawer';
import NotificationPop from './NotificationPop.js';
import Avatar from './AvatarProfile';
import { useMediaQuery } from '@chakra-ui/react';
import Theme from '../utils/Theme';

function Navbar() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <>
      <Grid templateColumns="repeat(13,1fr)" paddingTop={2}>
        <GridItem colStart={1}>
          <Box
            position={'fixed'}
            p="4"
            w={'7vw'}
            boxShadow={isLargerThan800 ? 'md' : ''}
            textAlign={'center'}
            bgColor={isLargerThan800 ? Theme.colors.company.background : ''}
            borderRadius={'xl'}>
            <EmployeeDrawer />
          </Box>
        </GridItem>

        <GridItem colEnd={12}>
          <Box p="4" h={'8vh'} position={'sticky'}>
            <HStack>
              <NotificationPop />
              <Avatar />
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Navbar;