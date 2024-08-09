import React from 'react';
import {data} from './Data.js';
import './assets/css/product.css';
import { Link } from 'react-router-dom';


const Product=()=> {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
      {data.map((product, index) => (
        <div className='product-card'>
          <li key={index}>
            <table>
              <tr>
                <td>
            <h2>{product.name}</h2>
            <p>Rating: {product.rating}</p>
            
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            
            <Link to ="/menu" className="btn">
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

        
// function Product({ name, rating, price }) {
//     return (
        
//       <div className="card">
//         <h2>{name}</h2>
//         <p>Rating: {rating}</p>
//         <p>Price: ${price}</p>
//       </div>
//     );
//   }
  
      
 


// const Product = ({ data }) => {
//   return (
//     <div className="card-list">
//       {data.map((item, index) => (
//         <Card key={index} name={item.name} rating={item.rating} price={item.price} />
//       ))}
//     </div>
//   );
// };

// const Card = ({ name, rating, price }) => {
//   return (
//     <div className="card">
//       <h2>{name}</h2>
//       <p>Rating: {rating}</p>
//       <p>Price: ${price}</p>
//     </div>
//   );
// };

export default Product;
