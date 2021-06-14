import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
function Profile() {

    const {id} = useParams()
    const [data, setData]= useState(null)

    console.log(data)

    useEffect(()=>{
        (async ()=>{
            await axios.get(`https://my-json-server.typicode.com/PrashanthEG/grootjson/data/${id}`).then((res)=>{
                   setData(res.data)
            })
        })()
    },[id])
    if(data == null){
        return(
            <h1>Loading</h1>
        )
    }else
    return (
        <div>
            <h1 style={{textDecoration:'underline'}}>USER DETAILS</h1>
            <h1>Name : {data.name}</h1>
            <h1>DOB : {data.dob}</h1>
            <p>Age : {data.age}</p>
            <p>Address : {data.more.address_line1}</p>
            <p>Phone number : {data.more.phone}</p>
             { data.more.previous != null && <Button color='primary' variant='contained'><Link to={`/profile/${data.more.previous}`}>Previous User</Link></Button>}
            &nbsp;&nbsp;{ data.more.next != null && <Button color='primary' variant='contained'><Link to={`/profile/${data.more.next}`}>Next User</Link></Button>}

        </div>
    )
}

export default Profile
