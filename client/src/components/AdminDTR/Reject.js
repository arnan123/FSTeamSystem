import React from 'react';
import { HiXCircle } from "react-icons/hi";
import axios from 'axios';
import { PropTypes } from 'prop-types'
import { useToast } from '@chakra-ui/react';

export default function Reject({ log}) {
  const toast = useToast();
  
  function reject() {
      axios.delete('http://localhost:8080/log/deleteLog/'+log.id).then(() => {
        toast({
          title: 'Rejected',
          description: 'DTR was rejected successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
      });
  }

  return (
    <>
      <HiXCircle cursor="pointer" size="4vh" color='red' onClick={reject}/>
    </>
  );
}

Reject.propTypes={
  user: PropTypes.any, log: PropTypes.any
}