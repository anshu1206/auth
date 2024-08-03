import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
 const navigate = useNavigate()
  const API = "http://localhost:4000/api/login/loginUser";
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(API, user);
      const data = await response.data;
      setMessage('Logged in successfully');
      console.log(message, data)
      const token = data.token
      localStorage.setItem('token', token)
      navigate('/')
    } catch (err) {
      console.log(err);
      setMessage('Error logging in');
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
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}