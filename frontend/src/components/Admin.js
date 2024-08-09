import React from 'react';
import './Admin.css';


// import React, { Component } from 'react';

// class AdminPanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // Define state variables here
//     };
//   }


const Admin = () => {

    return (
        <>
       
        
      <div className="admin-panel">
        <h1>Welcome to the Admin Panel</h1>
       
        {/* Navigation Sidebar */}
        <div className="sidebar">
          {/* Add navigation links */}
          
          <ul>
            <h1>
            <li><a href="/">Home</a></li>
            <li><a href="/admin">AdminPanel</a></li>
            <li><a href="/vendors">Vendors</a></li>
            </h1>
            {/* Add more links as needed */}
          </ul>
          
        </div>
        </div>
        
        {/* Main Content Area */}
        
     
      
      </>
    );
  }


export default Admin;