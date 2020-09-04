import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const initialFormInputs= {
    username:"",
    password:""
}

const SignUp = () => {

    const history = useHistory();
    const [ inputs, setInputs ] = useState(initialFormInputs);

    const changeInputs = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    };

    const submitRegister = (e) => {
        e.preventDefault();
        axios   
            .post("http://localhost:7000/api/register", inputs)
            .then(res => {
                console.log("This is from the register call",res.data)
                history.push("/login")
            })
            .catch(err => console.log("error registering a user!!!", err))
    };

    return (
        <>
        <h2>Welcome to the register part of my stretch</h2>
        <p>Please register a new user</p>
        <form onSubmit={submitRegister}>
            <label htmlFor="username">Username</label>
            <input 
                name="username"
                type="text"
                value={inputs.username}
                onChange={changeInputs}
                />

            <label htmlFor="password">Password</label>
            <input 
                name="password"
                type="text"
                value={inputs.password}
                onChange={changeInputs}
                />

            <button>Register</button>
        </form>
        </>
    )

};

export default SignUp;