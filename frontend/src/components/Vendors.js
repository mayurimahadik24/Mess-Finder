import React, { useState } from 'react';
import axios from 'axios';

//navigation 

const Vendors = () => {
  const [messData, setMessData] = useState({
    name: '',
    price: '',
    pincode: '',
    rating: '',
    address: '',
    images: '',
    menu: '',
  });
  async function submit(e){
    e.preventDefault();

  
  try{
    await axios.post("http://localhost:8000/addMessProduct",{
        
    name: messData.name,
      price: messData.price,
      pincode: messData.pincode,
      rating: messData.rating,
      address: messData.address,
      images: messData.images,
      menu: messData.menu,
    })
   
}

catch(e){
    console.log(e);

}
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessData({ ...messData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or store it in state
    console.log('Form submitted with data:', messData);
  };

  return (
    <div>
      <h2>Vendors fill  Information Mess Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Mess Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={messData.name}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="rating">Max Price:</label>
          <input
            type="text"
            id="rating"
            name="price"
            value={messData.price}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="rating">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={messData.address}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="rating">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={messData.pincode}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={messData.rating}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="images">Images URL:</label>
          <input
            type="text"
            id="images"
            name="images"
            value={messData.images}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="menu">Menu:</label>
          <textarea
            id="menu"
            name="menu"
            value={messData.menu}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
        <input type="submit" onClick={submit} />
        </div>
      </form>
    </div>
  );
};

export default Vendors;


// // Save the mess record to the database
// newMess.save()
//   .then((result) => {
//     console.log('Mess record saved:', result);
//   })
//   .catch((error) => {
//     console.error('Error saving mess record:', error);
//   });