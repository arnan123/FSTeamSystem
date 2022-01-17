import React, { useState, useEffect } from 'react';
import {
  Input,
} from '@chakra-ui/react'
import axios from 'axios'
import { PropTypes } from 'prop-types'

export default function Search({setEmployees}) {

  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/admin/search/get?name="+value).then((response) => {
      setEmployees(response.data);
    });
  },[]);

  function search(e){
    setValue(e.target.value)
    if(e.target.value == ""){
      axios.get("http://localhost:8080/admin/view").then((response) => {
        setEmployees(response.data);
      },[]);
    }
    else{
      axios.get("http://localhost:8080/admin/search/get?name="+e.target.value).then((response) => {
      setEmployees(response.data);
    },[]);
    }
  }

  return (
    <Input placeholder="Search employees..." value={value} onChange={e=>search(e)}/>
  )
}

Search.propTypes={
  setEmployees: PropTypes.any
}