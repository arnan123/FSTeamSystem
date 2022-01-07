import React from 'react';
import {
  ListItem,
  OrderedList,
  Box
} from '@chakra-ui/react'

export default function ListTeam(){
  return(
    <Box display="block">
      <OrderedList>
      <ListItem fontSize="xl">Rayl Xylem</ListItem>
      <ListItem fontSize="xl">Rayl Xylem</ListItem>
      <ListItem fontSize="xl">Rayl Xylem</ListItem>
      <ListItem fontSize="xl">Rayl Xylem</ListItem>
    </OrderedList>
    </Box>
  );
}