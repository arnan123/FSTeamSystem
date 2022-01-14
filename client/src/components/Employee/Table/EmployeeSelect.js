import React from 'react';
import PropTypes from 'prop-types';
import { Box, Select } from '@chakra-ui/react';

function EmployeeSelect() {
  return (
    <Box>
      <Select
        placeholder="Select Date"
        variant={'outline'}
        color={'black'}
        bg={'white'}>
        <option></option>
      </Select>
    </Box>
  );
}

EmployeeSelect.propTypes = {
  attendance: PropTypes.any,
  dateData: PropTypes.any,
  dates: PropTypes.any,
  setDates: PropTypes.any,
};

export default EmployeeSelect;
