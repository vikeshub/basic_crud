import React, { useEffect, useState } from "react";
import "../adduser/Add.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function Edit() {
  const users = {
    fname: "",
    lname: "",
    email: "",
  };
  const { id } = useParams();
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api';

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`${BASE_URL}/update/${id}`, user)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="adduser">
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form className="adduserform" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              onChange={inputChangeHandler}
              value={user.fname}
              id="fname"
              name="fname"
              autoComplete="off"
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              onChange={inputChangeHandler}
              value={user.lname}
              id="lname"
              name="lname"
              autoComplete="off"
              placeholder="Enter Your Last Name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={inputChangeHandler}
              value={user.email}
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Your Email "
            />
          </div>

          <div className="inputGroup">
            <button type="submit">UPDATE USER</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
