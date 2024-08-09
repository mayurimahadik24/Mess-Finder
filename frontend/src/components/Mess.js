import React, { useEffect, useState } from 'react';
// import {data} from './Data.js';
import './assets/css/product.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';


const Mess=()=> {
  const [messProducts ,setMessProducts] =useState([]);
  // useEffect(() =>{
  //   axios.get('http://localhost:8000/addMessProduct')
  //   .then(messProducts => setMessProducts(Data))



  // })


  
  useEffect(() => {
    axios.get('http://localhost:8000/addMessProducts') // Adjust the URL
      .then((response) => {
        // Access the data from the response and update state
        setMessProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <Navbar/>
       <div className="boxcontainer">
             
             <h1 className="heading">
               Our  <span>Mess</span>
                     </h1>
                     
                     </div>
      <ul>
      {messProducts.map((Data) => (
        <div className='product-card'>
          <li key={Data}>
            <table>
              <tr>
                <td>
            <h2>{Data.name}</h2>            
            <p>Max Price: ${Data.price}</p>
            <p>Adreess: {Data.address}</p>
            <p>Pincode: {Data.pincode}</p>
            <p>Menu: {Data.menu}</p>
            <p>Rating: {Data.rating}</p>
            <Link to ="/menu" className="btn">
                View more
                </Link>
            </td>
            <td><img src={Data.images} alt="{name}" /></td>
            </tr>
            </table>
          </li>
          </div>
          
        ))}
      </ul>
    </div>
  );
}


  








      

// import React from "react";
// import Navbar from "../components/Navbar";
// // import mess1 from "./assets/mess1.jpeg";
// import mess2 from "./assets/mess2.jpeg";
// import mess3 from "./assets/mess3.jpeg";
// import mess4 from "./assets/mess4.jpeg";
// import mess5 from "./assets/mess5.jpeg";
// import { Link } from "react-router-dom";
// import './signup.css';


// const Mess = () => {
//   return (
//     <> 
  
      
//       <section className="menu" id="menu">
//       {Nvbar()}
// {/*     
//         <h1 className="heading">
//           Top <span>Rated</span>(mess)
//         </h1>

//         <div className="box-container">
     
//           </div>
//           */}
    
//          <div className="box-container">
             
//            <h1 className="heading">
//           Top <span>Rated</span>(mess)
//            </h1>
//            </div>

//         <div className="box-container">
           
//            <div clasName="box">
//              <div >
//              <img src={mess2} alt="rosepic"></img>
//              </div>
//              <div>
//                 <p>
//                   ANNAPURNA MESS
//                 </p>
//                 </div>
//               <div className="rating">
//               <p><span>rating</span></p>   
//               </div>

              

//               <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   {/* <i className="fas fa-star-half-alt"></i> */}
//                 </div>
              
            
//               <a href="#" className="btn">
//                 View more
//               </a>
//             </div>

//             <div clasName="box">
//               <div>
//              <img src={mess2} alt="rosepic"></img>
//              </div>
//              <div align="center" >
//                 <p>
//                   <h1>
//                   MANSVI MESS
//                   </h1>
//                 </p>
//                 </div>

//               <div className="rating">
//               <p>rating</p>
                
//               </div>
//               <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
              
            
//               <a href="#" className="btn">
//                 View more
//               </a>
              
//               </div>
//               <div clasName="bb">
//               <div>
//              <img src={mess3} alt="rosepic"></img>
//              </div>
//              <div>
//                 <p>
//                   FOODY MESS
//                 </p>
//                 </div>

//               <div className="rating">
//               <p>rating</p>
                
//               </div>
//               <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
              
            
//               <a href="#" className="btn">
//                 View more
//               </a>
//               </div>
              
//               <div clasName="bb">
//               <div>
//              <img src={mess4} alt="rosepic"></img>
//              </div>
//              <div>
//                 <p>
//                   DATAKRUPA MESS
//                 </p>
//                 </div>

//               <div className="rating">
//               <p>rating</p>
                
//               </div>
//               <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
              
            
//               <a href="/menu" className="btn">
//                 View more
//               </a>
//               </div>
              
//               <div clasName="bb">
//               <div>
//              <img src={mess5} alt="rosepic"></img>
//              </div>
//              <div>
//                 <p>
//                   DATKRuPA MESS
//                 </p>
//                 </div>
            
//               <div className="rating">
//               <p>rating</p>
                
//               </div>
//               <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
              
            
//               <Link to ="/menu" className="btn">
//                 View more
//                 </Link>
             
             
              
//               </div>

              
      
       
//         </div>
    
        
        
//       </section>
      
//     </>
//   );


   
//   function Nvbar() {
//     return <Navbar></Navbar>;
//   };
 
// };

export default Mess;
