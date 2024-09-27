import React from 'react'
import { Link } from 'react-router-dom';
import "./User.css";
function User() {
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
                <tr>
                    <td>1.</td>
                    <td>Santosh Kumar</td>
                    <td>santoshKumar@gmail.com</td>
                    <td className='actionButtons'>
                        <button>Delete</button>
                        <Link to={'/edit'}>Edit</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default User;