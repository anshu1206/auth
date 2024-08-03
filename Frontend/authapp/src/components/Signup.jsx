import React, { useState } from "react";
import axios from 'axios'
export default function Signup() {
  const [user, setUser] = useState({ username: "", email : "", phoneNo : "", password: "" });
  const [message, setMessage] = useState("");

  const API = "http://localhost:4000/api/signup/postinfo"
  async function handleSubmit(e){
  e.preventDefault();
  try {
    const response = await axios.post(API, user);
    setMessage('Registered in successfully');
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
  return (
    <div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-5 m-auto">
            <form action="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  name="username"
                  value={user.username}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={user.email}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone No"
                  aria-label="phoneNo"
                  aria-describedby="basic-addon1"
                  name="phoneNo"
                  value={user.phoneNo}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  name="password"
                  value={user.password}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>
              <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}