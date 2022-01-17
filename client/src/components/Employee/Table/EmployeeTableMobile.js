import {
  Box,
  VStack,
  Center,
  useDisclosure,
  ButtonGroup,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import EmployeeTableMobileData from './EmployeeTableMobileData';
import ModalContainer from '../../ModalContainer';
import EmployeeSelect from './EmployeeSelect';
import moment from 'moment';
import PropTypes from 'prop-types';
import axios from 'axios';

function EmployeeTableMobile({ userData }) {
  const [ind, setInd] = useState(false);
  const [tableDatas, setTableDatas] = useState([]);
  const [dates, setDates] = useState(moment().format('MMMM'));
  const [day, setDay] = useState(5);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get('http://localhost:8080/attendance/viewDTR/' + userData.id)
      .then((response) => {
        setTableDatas(response.data);
      });
    // console.log(tableDatas);
  }, [ind]);

  return (
    <>
      <Center>
        <Box>
          <VStack>
            <ButtonGroup>
              <EmployeeSelect
                dateData="month"
                attendance={tableDatas}
                dates={dates}
                setDay={setDay}
                setDates={setDates}
              />
              <EmployeeSelect
                dateData="half"
                attendance={tableDatas}
                dates={dates}
                setDay={setDay}
                setDates={setDates}
              />
              <ModalContainer
                buttoncolor={ind == true ? 'green' : 'blue'}
                buttontext={ind == true ? 'Save' : 'Edit'}
                header={ind == true ? 'Save Data' : 'Edit Data'}
                content={
                  ind == true
                    ? 'After clicking this action the data will be saved.'
                    : 'After clicking this action the data can be edited.'
                }
                setIndicator={setInd}
                indicator={ind}
                userData={userData}
              />
            </ButtonGroup>

            {tableDatas.map((tableData) => (
              <Box key={tableData.id} boxShadow={'2xl'}>
                <EmployeeTableMobileData
                  ind={ind}
                  month={dates}
                  onOpen={onOpen}
                  isOpens={isOpen}
                  onCloses={onClose}
                  attendance={tableData}
                  userData={userData}
                  days={day}
                />
              </Box>
            ))}
          </VStack>
        </Box>
      </Center>
    </>
  );
}

EmployeeTableMobile.propTypes = {
  userData: PropTypes.any,
};

export default EmployeeTableMobile;
