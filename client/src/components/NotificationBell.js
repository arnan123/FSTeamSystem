import React from 'react';
import PropTypes from 'prop-types';
import { FiBell } from 'react-icons/fi';
// import { css } from '@emotion/react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  // PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react';

function NotificationBell(props) {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          py={'2'}
          color={'white'}
          colorScheme={'#2a3b5e'}
          aria-label={'Notifications'}
          size={'lg'}
          icon={
            <>
              <FiBell color={'gray.750'} size={'small'} />
              <Box
                as={'span'}
                color={'white'}
                position={'absolute'}
                top={'6px'}
                right={'4px'}
                fontSize={'0.9rem'}
                bgColor={'red'}
                borderRadius={50}
                // zIndex={}
                p={'1px'}>
                {props.count}
              </Box>
            </>
          }
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        {/* <PopoverCloseButton /> */}
        <PopoverHeader fontWeight={'bold'}>Notifications</PopoverHeader>
        <PopoverBody>
          <VStack>
            <Alert shadow={'2xl'}>
              <AlertIcon />
              <Box flex={1}>
                <AlertTitle>Data Added</AlertTitle>
                <AlertDescription display={'block'}>
                  Your daily time record has been approved by the manager
                </AlertDescription>
              </Box>
              <CloseButton position="absolute" right="5px" top="5px" />
            </Alert>
            <Alert>
              <AlertIcon />
              <Box flex={1}>
                <AlertTitle>Data Added</AlertTitle>
                <AlertDescription display={'block'}>
                  Your daily time record has been approved by the manager
                </AlertDescription>
              </Box>
              <CloseButton position="absolute" right="5px" top="5px" />
            </Alert>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

NotificationBell.propTypes = {
  count: PropTypes.any,
};

export default NotificationBell;
