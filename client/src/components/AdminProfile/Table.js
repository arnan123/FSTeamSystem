import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, HStack, Checkbox, Input } from '@chakra-ui/react'
import moment from 'moment';
import axios from 'axios';
import { PropTypes } from 'prop-types'
import EditModal from './EditModal';
import Approve from './Approve';

export default function TableData({id}){
  const [attendances, setAttendances] = useState([]);
  const [checkedItems, setCheckedItems] = useState([])
  const [ids, setIds] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/attendance/viewDTR/"+id).then((response) => {
      setAttendances(response.data);
      console.log(response.data)
    });
  },[]);
  function idsreturn(ischecked,value){
    if(ischecked==true){
      setIds(ids+value)
    }
    else{
      setIds(ids.replace(value,""))
    }
  }
  return(
    <Box maxH="60vh" p="5" overflowY="auto">
      <Table>
        <Thead>
          <Tr>
            <Th>
            <Checkbox
              isChecked={
                checkedItems.length ===
                attendances.map(attendance => attendance.id).length
              }
              onChange={() => {
                const attendanceIds = attendances.map(attendance => attendance.id);
                if (checkedItems.length === attendanceIds.length) {
                  setCheckedItems([]);
                  setCheckedItems("");
                } else {
                  setCheckedItems(attendanceIds);
                  setIds(attendances.map(attendance => attendance.id))
                }
              }}
            >
              Date
            </Checkbox>
            </Th>
            <Th>Time Started</Th>
            <Th>Time Ended</Th>
            <Th>Elapsed Break</Th>
            <Th>Undertime</Th>
            <Th>Overtime</Th>
            <Th>Tardiness</Th>
            <Th>Total Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {attendances.map((attendance)=>(
            <Tr bg={(attendance.approved==0?"yellow":"limegreen")} key={attendance.id}>
              <Td>
                <Checkbox
                  isChecked={checkedItems.includes(attendance.id)}
                  onChange={event => {
                    event.stopPropagation();
                    const index = checkedItems.indexOf(attendance.id);

                    if (index > -1) {
                      setCheckedItems([
                        ...checkedItems.slice(0, index),
                        ...checkedItems.slice(index + 1)
                      ]);
                    } else {
                      setCheckedItems([
                        ...checkedItems,
                        attendance.id
                      ]);
                    }
                    idsreturn(event.target.checked, event.target.value)
                  }}
                  value={attendance.id+','}
                >
                  {moment(attendance.insertDate).format("MMMM D, YYYY")}
                </Checkbox>
              </Td>
              <Td>{attendance.timeStarted}</Td>
              <Td>{attendance.timeEnded}</Td>
              <Td>{attendance.elapsedBreak}</Td>
              <Td>{attendance.underTime}</Td>
              <Td>{attendance.overTime}</Td>
              <Td>{attendance.tardiness}</Td>
              <Td>{attendance.totalTime}</Td>
              <Td><HStack><EditModal attendance={attendance} userID={id}/>{(attendance.approved==0)?<Approve userID={id} ids={ids} setAttendances={setAttendances}/>:null}</HStack></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Input display="none" value={ids} onChange={(e)=>setIds(e.target.value)}/>
    </Box>
  );
}

TableData.propTypes={
  id: PropTypes.any
}