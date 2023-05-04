import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Style.css';
import axios from 'axios';

const Home = () => { 
  var [value,setValue]= useState([])
  useEffect(()=>{
      axios.get('https://dummyjson.com/users').then((response)=>{
        console.log(response);
        setValue(value=response.data.users);
      }) 
  },[])
  return (
    <div>
      <Table class='dot'>
        <TableHead>
          <TableRow class='mot'>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody class='not'>
           {value.map((data,ind)=>{
             return <TableRow>
              <TableCell>{data.firstName}</TableCell>
              <TableCell>{data.lastName}</TableCell>
              <TableCell>{data.age}</TableCell>
             </TableRow>
           })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Home
