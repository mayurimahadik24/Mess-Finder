// Import the necessary packages
const mongoose = require('mongoose');


const messSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  menu: {
    type: String, 
    required: true,
  },
});


const Mess = mongoose.model('Mess', messSchema);

module.exports = Mess;

