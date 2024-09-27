import React, { useState } from "react";
import "./Add.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Add() {

    const users={
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const [user,setUser]=useState(users);

    const inputHandler =(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
        console.log(user)
    }
    const submitForm =async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",user)
        .then((response)=>{
            console.log(response)
        }).catch(error=>console.error(error))
    }
  return (
    <div className="adduser">
      <Link to={"/"}>Back</Link>
      <h3>Add User</h3>
      <form className="adduserform" onSubmit={submitForm}>
        <div className="inputGroup">
            <label htmlFor="fname">First Name</label>
            <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete="off" placeholder="Enter Your First Name" />
        </div>
        <div className="inputGroup">
            <label htmlFor="lname">Last Name</label>
            <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete="off" placeholder="Enter Your Last Name" />
        </div>
        <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" onChange={inputHandler} id="email" name="email" autoComplete="off" placeholder="Enter Your Email " />
        </div>
        <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={inputHandler} id="password" name="password" autoComplete="off" placeholder="Enter Your Password" />
        </div>
        <div className="inputGroup">
        <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
