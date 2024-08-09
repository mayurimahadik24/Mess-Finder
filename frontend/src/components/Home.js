import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Home(){
    const location=useLocation()
    const currUser = JSON.parse(localStorage.getItem('user'));
    console.log(currUser)

    return (
        <div className="homepage">
            <Navbar/>
            <h1 style={{marginTop:'100px'}}>Hello {currUser} and welcome to the home</h1>
        </div>

    )
}
    

   export default Home;