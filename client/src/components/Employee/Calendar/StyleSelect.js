import React from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  Box,
  Flex,
  Spacer,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';

function StyleSelect({ setStyle }) {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  return (
    <Center>
      <Box>
        <Flex w={isLargerThan1000 ? '50vw' : '80vw'}>
          <Spacer />
          <Box>
            <Select color="white"
              defaultValue="Calendar"
              size={'md'}
              onChange={(e) => {
                setStyle(e.target.value);
              }}>
              <option value="Calendar">Calendar Style</option>
              <option value="List">List Style</option>
            </Select>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}

StyleSelect.propTypes = {
  setStyle: PropTypes.any,
};

export default StyleSelect;
