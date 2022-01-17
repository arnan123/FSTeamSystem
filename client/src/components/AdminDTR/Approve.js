import React from 'react';
import { HiCheckCircle } from "react-icons/hi";
import axios from 'axios';
import { PropTypes } from 'prop-types'
import { useToast } from '@chakra-ui/react';

export default function Approve({ log, setLogs}) {
  const toast = useToast();

  function approve () {
    const attendance={
      timeStarted: log.timeStarted,
      timeEnded: log.timeEnded,
      elapsedBreak: log.elapsedBreak,
      underTime: log.underTime,
      overTime: log.overTime,
      tardiness: log.tardiness,
    }
    axios.put('http://localhost:8080/attendance/updateAttendance/'+log.attendance.id, attendance).then(() => {
      toast({
        title: 'Approved',
        description: 'DTR was approved successfully',
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: false,
      });
    });
    axios.delete('http://localhost:8080/log/deleteLog/'+log.id);
    axios.get("http://localhost:8080/log/viewLogs").then((response) => {
      setLogs(response.data);
    });
  }

  return (
    <>
      <HiCheckCircle cursor="pointer" size="4vh" color='limegreen' onClick={approve}/>
    </>
  );
}

Approve.propTypes={
  user: PropTypes.any, log: PropTypes.any, setLogs: PropTypes.any
}