import React, { useRef } from "react";
// import { useState } from "react";

const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  // const [searchPincode,setSearchPincode] = useState('');
  // const [messProducts, setMessProducts] = useState([]);
  
  // // const handleInputChange = (event) => {
  // //   setSearchTerm(event.target.value);
  // // };

  
  // const handleInputChange = (event) => {
  //   const pincode = event.target.value;
  //   setSearchPincode(pincode);

  //   // Filter the items based on the entered pincode
  //   const filtered = items.filter((item) =>
  //    messProducts.pincode === pincode
  //   );

  //   setFilteredItems(filtered);
  // };


  // const [searchPincode, setSearchPincode] = useState('');
  // const [messProducts, setMessProducts] = useState([]);
  // const [filteredMessProducts, setFilteredMessProducts] = useState([]); // Added filteredMessProducts state
  
  // const handleInputChange = (event) => {
  //   const pincode = event.target.value;
  //   setSearchPincode(pincode);
  
  //   // Filter the items based on the entered pincode
  //   const filteredData = messProducts.filter((data) => data.pincode === pincode);
  //   setFilteredMessProducts(filteredData); // Update the filteredMessProducts state
  // };
  
  
  // const handleInputChange = (event) => {
  //   const pincode = event.target.value;
  //   setSearchPincode(pincode);

  //   // Filter the items based on the entered pincode
  //   const Data = messProducts.filter((data) =>
  //    data.pincode === pincode
  //   );

  //   setMessProducts(Data);

  //   const filteredData =filteredMessProducts.filter((data) => data.pincode === pincode);
  //   setFilteredMessProducts(filteredData); // Update the filteredMessProducts state
  // };


  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        
         
     
        <nav className="navbar" ref={navbarRef}>
          <a className="flat-button" href="/home1">home</a>
          <a className="flat-button" href="/about">about</a>
          <a className="flat-button" href="/mess">mess</a>
          <a className="flat-button" href="/product">products</a>
          <a className="flat-button" href="#review">review</a>
          <a className="flat-button" href="#contact">contact</a>
          <a className="flat-button" href="#blogs">blogs</a>
          <a className="flat-button" href="/admin">Admin</a>
          <a className="flat-button" href="/card">Card</a>
          <a className="flat-button" href="/login">Login</a>
          
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        {/* <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div> */}
        
        {/* <div> */}
      {/* <input
        type="Number"
        placeholder="Search..."
        value={searchPincode}
        onChange={handleInputChange}
      /> */}
      {/* <ul>
        {messProducts.map((Data) => (
          <li key={Data.pincode}>{Data.name}</li>
        ))}
      </ul> */}

      {/* Display search results here */}
    {/* </div> */}
      </header>
    </>
  );
};

export default Navbar;
