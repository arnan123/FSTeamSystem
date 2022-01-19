import axios from 'axios';
import React from 'react';
import { HiCheckCircle } from "react-icons/hi";
import { PropTypes } from 'prop-types'
import { useToast } from '@chakra-ui/react';

export default function Approve({userID,ids, setAttendances}) {

  const toast = useToast();

  function approve(){
    axios.put("http://localhost:8080/attendance/approveDTR/"+userID+"?attendanceIds="+ids).then(()=>{
      toast({
        title: 'Approved',
        description: 'DTRs were approved successfully',
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: false,
      });
    });
    axios.get("http://localhost:8080/attendance/viewDTR/"+userID).then((response) => {
      setAttendances(response.data);
    },[]);
  }

  return (
    <>
      <HiCheckCircle cursor="pointer" size="4vh" color='limegreen' onClick={approve}/>
    </>
  );
}

Approve.propTypes={
  userID: PropTypes.any, ids: PropTypes.any, setAttendances: PropTypes.any
}