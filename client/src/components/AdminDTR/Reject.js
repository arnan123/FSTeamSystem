import React from 'react';
import { HiXCircle } from "react-icons/hi";
import axios from 'axios';
import { PropTypes } from 'prop-types'
import { useToast } from '@chakra-ui/react';

export default function Reject({log}) {
  const toast = useToast();
  
  const reject = (e) => {
    e.preventDefault();
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
      axios.get("http://localhost:8080/log/viewLogs").then((response) => {
        console.log(response.data);
      })
  }

  return (
    <>
      <HiXCircle cursor="pointer" size="4vh" color='red' onClick={(e)=>reject(e)}/>
    </>
  );
}

Reject.propTypes={
  user: PropTypes.any, log: PropTypes.any, setLogs: PropTypes.any
}