// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
// import { useState } from 'react';

// import Login from "./components/login_component";
// import Home from './components/Home';
import Home1 from './components/Home1';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Navbar></Navbar>
      <Home1></Home1>
      <About></About>
      <Footer></Footer>
      
      
      
     
      
      
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//     <Router>
     
//         {/* <div className='auth-wrapper'>
//           <div className="auth-inner"> */}
//             <Routes>
//               <Router path="/" element = {<Login/>}/>
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//             </Routes>
//           {/* </div>
//         </div> */}
     
//     </Router>
//     </div>
//   );
// }

// export default App;
