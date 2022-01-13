import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import AvatarProfile from '../../AvatarProfile';
import NotificationPop from '../../NotificationPop';

function EmployeeHeader(props) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Grid
      templateColumns="repeat(20,1fr)"
      color={props.color}
      paddingTop={'2%'}
      paddingBottom={isLargerThan800 ? '' : ''}>
      <GridItem
        colStart={isLargerThan800 ? 5 : 9}
        colEnd={isLargerThan800 ? 12 : 19}>
        <Text fontSize={isLargerThan800 ? '3vw' : '7vw'} fontWeight={'bold'}>
          {props.text}
        </Text>
      </GridItem>
      <GridItem colStart={19} paddingTop={'2%'}>
        <Box>
          <HStack>
            <NotificationPop />
            <AvatarProfile />
            {isLargerThan800 && <Text>Planco,Arnan</Text>}
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
}

EmployeeHeader.propTypes = {
  color: PropTypes.any,
  text: PropTypes.any,
};

export default EmployeeHeader;
