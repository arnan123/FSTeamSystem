import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import AvatarProfile from '../../AvatarProfile';
import NotificationPop from '../../NotificationPop';

function EmployeeHeader(props) {
  return (
    <Grid
      templateColumns="repeat(20,1fr)"
      color={props.color}
      paddingTop={'2%'}>
      <GridItem colStart={6} colEnd={9}>
        <Text fontSize={'4xl'}>Time in</Text>
      </GridItem>
      <GridItem colStart={19} paddingTop={'2%'}>
        <Box>
          <HStack>
            <NotificationPop />
            <AvatarProfile />
            <Text>Planco,Arnan</Text>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
}

EmployeeHeader.propTypes = {
  color: PropTypes.any,
};

export default EmployeeHeader;
