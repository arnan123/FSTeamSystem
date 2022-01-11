import React from 'react';
import { Box, HStack, Grid, GridItem } from '@chakra-ui/react';
import NotificationPop from './NotificationPop.js';
import Avatar from './AvatarProfile';
// import { useMediaQuery } from '@chakra-ui/react';

function Navbar() {
  // const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <>
      <Box borderBottom={'2px'}>
        <Grid templateColumns="repeat(16,1fr)" paddingTop={'2%'}>
          <GridItem colStart={15}>
            <Box p="4" h={'8vh'}>
              <HStack>
                <NotificationPop />
                <Avatar />
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Navbar;
