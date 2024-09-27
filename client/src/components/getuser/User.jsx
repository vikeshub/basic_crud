import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import "./User.css";
function User() {
    const [users,setUsers]=useState([])
    

    useEffect(()=>{
        const fetchData=async()=>{
         const response=await axios.get("http://localhost:8000/api/getall")
         setUsers(response.data);
        }
        fetchData();
    },[])

    const deleteUser=async(userId)=>{
        await axios.delete(`http://localhost:8000/api/delete/${userId}`)
        .then((response)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id !=userId))
            console.log(response)
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