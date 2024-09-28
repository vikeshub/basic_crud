import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import toast from 'react-hot-toast';
import "./User.css";
function User() {
    const [users,setUsers]=useState([])
    const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api';


    useEffect(()=>{
        const fetchData=async()=>{
         const response=await axios.get(`${BASE_URL}/getall`)
         setUsers(response.data);
        }
        fetchData();
    },[])

    const deleteUser=async(userId)=>{
        await axios.delete(`${BASE_URL}/delete/${userId}`)
        .then((response)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id !=userId))
            console.log(response)
            toast.success(response.data.msg,{position:"top-right"})
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='userTable'>
        <Link to={"/add"} className='addbutton'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>User name</th>
                    <th>User Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map((user,index)=>{
                    return(
                        <tr key={user._id}>
                            <td>{index+1}.</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td className='actionButtons'>
                                <button onClick={()=>deleteUser(user._id)}>Delete</button>
                                <Link to={`/edit/`+user._id}>Edit</Link>
                            </td>
                        </tr>
                    )
                })
            }
                
            </tbody>
        </table>
    </div>
  )
}

export default User;