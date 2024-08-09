// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function Pincode() {
//   const [pincode, setPincode] = useState('');
//   const navigate = useNavigate();

//   // const history = useNavigate();
  
  
//   async function submit(e) {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:8000/pincode", {
//           pincode,
//         })
//         .then((result) => {
//           console.log(result);
//           if (result.pincode === "success") {
//             navigate("/Home");
//           }
//         });
//     } catch (e) {
//       console.log();
//     }
//   }


//   return (
//     <div>
//       <h2>Search for Pincode</h2>
//       <input
//         type="Number"
//         value={pincode}
//         onChange={(e) => setPincode(e.target.value)}
//         placeholder="Enter Pincode"
//       />
//       <button onClick={submit}>Search</button>
     
//     </div>
//   );
// }




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Pincode() {
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/pincode", {
        pincode,
      });

      if (response.data === "success") {
        navigate("/Home");
      }
    } catch (error) {
      console.log('Error:', error); // Log the error for debugging
    }
  }

  return (
    <div>
      <h2>Search for Pincode</h2>
      <input
        type="number"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        placeholder="Enter Pincode"
      />
      <button onClick={submit}>Search</button>
    </div>
  );
}







// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import './signup.css';

// function Pincode() {
//   const navigate = useNavigate();

//   const history = useNavigate();
//   const [pincode, setPincode] = useState("");
  

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:8000/pincode", {
//           pincode,
//         })
//         .then((result) => {
//           console.log(result);
//           if (result.pincode === "success") {
//             navigate("/Home");
//           }
//         });
//     } catch (e) {
//       console.log();
//     }
//   }

//   return (
//     <div className='login'>
//       <h3></h3>

//       <form action="POST">
//         <label>Enter Pincode</label>
//         <input
//           type="Number"
//           className="form-control"
//           onChange={(e) => {
//             setPincode(e.target.value);
//           }}
//           placeholder="Enter pincode"
//         />

//         <input type="submit" onClick={submit} />
//       </form>

      
//     </div>
//   );
// }

export default Pincode;