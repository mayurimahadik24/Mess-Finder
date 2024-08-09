import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import Navbar from "./Navbar";


function Login() {
  const navigate = useNavigate();

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  async function submit(e) {
    e.preventDefault();
  
    try {
      const result = await axios.post("http://localhost:8000/login", {
        email,
        password,
        role,
      });
  
      console.log(result.data.status);
  
      if (result.data.status === "success") {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(result.data.user));
        // Retrieve and log the current user from localStorage
        const currUser = JSON.parse(localStorage.getItem('user'));
        console.log(currUser);
  
        navigate("/Home");
      } else if (result.data.status === "login failed") {
        alert("Login failed. Please check your email, password, and role.");
      } else if (result.data.status === "user not exist") {
        alert("User does not exist. Please sign up.");
      } else {
        alert("An error occurred during login internally.");
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred during login.");
    }
  }
  

  return (
    <div className='login'>
      <Navbar/>
      
            
            <h3>Login to your account</h3>
          

      <form action="POST">
        
      <div className="inputTag">
      <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="vendors">Vendors</option>
                  <option value="users">users</option>
                </select>
                
              </div>
              </div>

        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          onChange={(e) => {setEmail(e.target.value);}}
          placeholder="Enter email"
        />

        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />
        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR </p>
      <br />

        <button className="flat-butto">
      <Link to="/signup">signup here</Link>
      </button>
     
    </div>
  );
}

export default Login;