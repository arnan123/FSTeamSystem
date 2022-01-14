import React from 'react';
import { HiCheckCircle } from "react-icons/hi";
import axios from 'axios';
import { PropTypes } from 'prop-types'
import { useToast } from '@chakra-ui/react';

export default function Approve({user, log}) {
  const toast = useToast();

  function approve () {
    let ids=""+log.attendance.id;
    const attendance={
      timeStarted: log.timeStarted,
      timeEnded: log.timeEnded,
      elapsedBreak: log.elapsedBreak,
      underTime: log.underTime,
      overTime: log.overTime,
      tardiness: log.tardiness,
    }
    axios
      .put('http://localhost:8080/attendance/approveDTR/'+user.id+'?attendanceIds='+ids)
      .then(() => {
        toast({
          title: 'Approved',
          description: 'DTR was approved successfully',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
      });
      axios.put('http://localhost:8080/attendance/updateAttendance/'+log.attendance.id, attendance);
      axios.delete('http://localhost:8080/log/deleteLog/'+log.id);
  }

  return (
    <>
      <HiCheckCircle cursor="pointer" size="4vh" color='limegreen' onClick={approve}/>
    </>
  );
}

Approve.propTypes={
  user: PropTypes.any, log: PropTypes.any
}