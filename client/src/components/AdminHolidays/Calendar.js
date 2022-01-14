import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Calendarr(){
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
        onChange={onChange}
        value={value}
        calendarType='US'
    />
  );
}

export default Calendarr;