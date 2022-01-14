import React from 'react';
import PropTypes from 'prop-types';
import { Box, Select } from '@chakra-ui/react';
import moment from 'moment';

function EmployeeSelect({ dateData, setDates, setDay, dates }) {
  // const months = moment.months();

  const nxtMonth = parseInt(moment().month(dates).format('M'));
  const nxtM = nxtMonth;
  return (
    <Box>
      <Select
        variant={'outline'}
        color={'black'}
        bg={'white'}
        defaultValue={dateData == 'month' ? 'January' : 5}
        onChange={
          dateData == 'month'
            ? (e) => setDates(e.target.value)
            : (e) => setDay(e.target.value)
        }>
        {dateData == 'month' &&
          moment.months().map((months) => (
            <option key={months} value={months}>
              {months}
            </option>
          ))}
        {dateData != 'month' && (

          <option value={5}>{dates + ' 6 to ' + dates + ' 20'}</option>

        )}
        {dateData != 'month' && (
          <option value={20}>
            {dates +

              ' 21 to ' +

              moment().month(nxtM.toString()).format('MMMM') +
              ' 5 '}
          </option>
        )}
      </Select>
    </Box>
  );
}

EmployeeSelect.propTypes = {
  attendance: PropTypes.any,
  dateData: PropTypes.any,
  dates: PropTypes.any,
  setDates: PropTypes.any,
  setDay: PropTypes.any,
};

export default EmployeeSelect;
