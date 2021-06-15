import React, {useState, useEffect} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

function Home() {

    const [users, setUsers] = useState([])

    useEffect(()=>{
      (async()=>{
         await axios.get("https://my-json-server.typicode.com/PrashanthEG/grootjson/db").then((res)=>{
           setUsers(res.data.data)
     })
    })()
  },[])



  return (

    <div className='op'>
      <h1 style={{textAlign:'center'}}>GROOTAN Technologies</h1>
      
   <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell >Name</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >view</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        { 
       
          users.map((user, index)=>{
              return(
                 
                 <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.more.address_line1}</TableCell>
                    <TableCell><Button color='primary' variant='contained'><Link key={index} to ={`/profile/${user.id}`}>more details..</Link></Button></TableCell>
                 </TableRow>
                
              )
          })
       }
    
        </TableBody>
      </Table>
     <br></br>
     
    </TableContainer>
    
    </div>
  );
}

export default Home


