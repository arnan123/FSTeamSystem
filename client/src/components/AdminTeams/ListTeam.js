import React from 'react';
import {
  ListItem,
  OrderedList,
  Box
} from '@chakra-ui/react'
import {PropTypes} from 'prop-types';

export default function ListTeam({employees}){
  return(
    <Box display="block">
      <OrderedList>
      {employees.map((employee) => (
        <ListItem key="" fontSize="xl">{employee.firstName} {employee.lastName}</ListItem>
      ))}
    </OrderedList>
    </Box>
  );
}

ListTeam.propTypes={
  employees: PropTypes.any
}