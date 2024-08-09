import React from "react";
import './assets/css/product.css';
// import { useRef } from "react";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import "./Card.css";
const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
  <div className="card-container">
    <img src="https://picsum.photos/300/200" alt ="card image" className="card-img"/>
    <h1 className="card-tile">Card Title</h1>
    <p className="card-discription">This is a card description </p>
    <a href ="Cardgrid" className="card-btn">Learn More</a>
  </div>
  )
}

export default Card;