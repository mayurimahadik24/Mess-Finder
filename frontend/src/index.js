import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login_component';
import SignUp from './components/signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Home1 from './components/Home1';
import About from './components/About';
import Footer from './components/Footer';
import Mess from './components/Mess';
import Menu from './components/Menu';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product';
import Admin from './components/Admin';
import Vendors from './components/Vendors';
import Pincode from './components/Pincode';
import Card from './components/Card';
// import Cardgrid from './components/pages/Cardgrid';


const router =createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path:"Signup",
    element:<SignUp/>
  },
  {
    path:"Navbar",
    element:<Navbar/>
  },
  {
    path: "/Home1",
    element: <Home1/>
  },
  
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Footer",
    element: <Footer/>
  },
  {
    path: "/Mess",
    element: <Mess/>
  },
  {
    path: "/Menu",
    element: <Menu/>
  },
  {
    path: "/Product",
    element: <Product/>
  },
  {
    path: "/Admin",
    element: <Admin/>
  },
  {
    path: "/Vendors",
    element: <Vendors/>
  },
  {
    path: "/Pincode",
    element: <Pincode/>
  },
  {
    path: "/Card",
    element: <Card/>
  },
  // {
  //   path: "/Cardgrid",
  //   element: <Cardgrid/>
  // }
  
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// cd frontend
// cd backend
// nodemon mongo.js
// "mongodb+srv://mayurishamal24:fJsXMHTsQhF9I3je@mayuri.rpxafnj.mongodb.net/Mayuri"