import React from 'react';
import {menu} from './Data.js';
import './assets/css/product.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';


const Menu=()=> {
  return (
    <div>
      <Navbar/>
      <div className="boxcontainer">
             
           <h1 className="heading">
               <span>Menu</span>
                   </h1>
                   </div>
      <ul>
      {menu.map((product, index) => (
        <div className='product-card'>
          <li key={index}>
            <table>
              <tr>
                <td>
            <h2>{product.name}</h2>
            <p>Rating: {product.rating}</p>
            
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            
            <Link to ="/login" className="btn">
                View more
                </Link>
            </td>
            <td><img src={product.image} alt={product.name} /></td>
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
// // import Navbar from "../components/Navbar";
// import menu1 from "./assets/menu-1.png"
// import menu2 from "./assets/menu-2.png"
// import menu3 from "./assets/menu-3.png"
// import menu4 from "./assets/menu-4.png"
// import menu5 from "./assets/menu-5.png"
// import { Link } from "react-router-dom";
// // import Mess from "./Mess";


// const Menu = () => {
//   return (
//     <> 
   
      
//       <section className="men" >
//       {/* {Mss()} */}
// {/*     
//         <h1 className="heading">
//           Top <span>Rated</span>(mess)
//         </h1>

//         <div className="box-container">
     
//           </div>
//           */}
    
//          <div className="boxcontainer">
             
//            <h1 className="heading">
//           <span>Menu</span>
//            </h1>
//            </div>

//         <div className="box">
           
//            <div clasName="bb">
//              <div >
//              <img src={menu1} alt="rosepic"></img>
//              </div>
//              <div>
//                 <p style={{color: "red"}}>
//                   ANNAPURNA MESS
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
//                   {/* <i className="fas fa-star-half-alt"></i> */}
//                 </div>
              
            
//               <a href="#" className="btn">
//                 View more
//               </a>
//             </div>

//             <div clasName="bb">
//               <div>
//              <img src={menu2} alt="rosepic"></img>
//              </div>
//              <div  >
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
//              <img src={menu3} alt="rosepic"></img>
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
//              <img src={menu4} alt="rosepic"></img>
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
              
            
//               <a href="#" className="btn">
//                 View more
//               </a>
//               </div>
              
//               <div clasName="bb">
//               <div>
//              <img src={menu5} alt="rosepic"></img>
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
              
            
//               <Link to="/login" className="btn">
//                 View more
//               </Link>
             
              
//               </div>

              
      
       
//         </div>
    
        
        
//       </section>
      
//     </>
//   );


   
// //   function Mss() {
// //     return <Mess></Mess>;
// //   };
 
// };

export default Menu;
