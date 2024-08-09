import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';


function SignUp() {

    const history=useNavigate();

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole] = useState("");


    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{

                name,role,email,password
            })
            // .then(res=>{
            //     if(res.data="exist"){
            //         alert("User already exists")
                    
            //     }
            //     else if(res.data="notexist"){
            //         history("/home",{state:{id:email}})
            //     }
            // })
            // .catch(e=>{
            //     alert("wrong details")
            //     console.log(e);
            // })
        }

        catch(e){
            console.log(e);

        }
    }
  
        return (
            <div className='login'>
               
            <h3>Sign Up</h3>

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
              <label>Name</label>
                <input type="name" className="form-control" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name"/>
                <br></br>

                <label>Email address</label>
                <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"/>
                <br></br>
           
                <label> Enter Password</label>
                <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password"/>
                <br></br>
                <br></br>
                <input style={{cursor:'pointer'}} type="submit" onClick={submit} />
                {alert("user Sucessfully registered.")}

            </form>

            <br/>
            <p>NOW GO TO LOGIN PAGE </p>
            <br/>
            <Link to="/login">Login Page</Link>
            </div>
        );
    
    }

    export default SignUp;