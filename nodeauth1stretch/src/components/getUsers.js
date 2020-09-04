import React, { useState, useEffect} from "react";
import axios from 'axios';

const GetUsers =() => {

    const [users, setUsers] = useState('')

    useEffect(() => {
        axios.get("http://localhost:7000/api/users")
        .then(res => {
            console.log("this is from the get call",res.data)
            setUsers(res.data)
        })
        .catch(err => console.log("this is from the get call",err))
    },[]);


    return (
        <>
        <p>Users</p>{/*
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
            </ul>  */ }
        </>
    )


};

export default GetUsers;