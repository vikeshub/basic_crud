import React from "react";
import "../adduser/Add.css";
import { Link } from "react-router-dom";

function Edit() {
  return (
    <div>
      <div className="adduser">
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form className="adduserform">
          <div className="inputGroup">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
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
