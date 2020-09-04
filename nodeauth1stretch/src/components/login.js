import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const initialFormInputs= {
    username:"",
    password:""
}

const Login = () => {

    const history = useHistory();
    const [ inputs, setInputs ] = useState(initialFormInputs);

    const changeInputs = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    };

    const submitLogin = (e) => {
        e.preventDefault();
        axios   
            .post("http://localhost:7000/api/login",inputs)
            .then( res => {
                console.log("this from the login call", res.data)
                history.push("/getUsers")
            })
            .catch( err => console.log("this is the error from the login call",err))
    };

    return (
        <>
        <h2>This is the login part of my stretch</h2>
        <p>Please login to continue</p>
        <form onSubmit={submitLogin}>
            <label htmlFor="username">Username</label>
            <input 
                name="username"
                type = "text"
                value={inputs.username}
                onChange={changeInputs}
                />

            <label htmlFor="pasword">Password</label>
            <input 
                name="password"
                type="text"
                value={inputs.password}
                onChange={changeInputs}
                />

            <button>Login</button>

        </form>
        </>
    )

};

export default Login;