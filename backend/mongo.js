const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
// import Mess from './Vendor';

const Mess=require("./Vendor.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://mayurishamal24:fJsXMHTsQhF9I3je@mayuri.rpxafnj.mongodb.net/Mayuri",
    {
      //insert your db id
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

const newSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("Collection", newSchema);

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password,role } = req.body;
  console.log(req.body);
  collection.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password && user.role === role ) {
        res.json("success");
      } else {
        res.json("login failed");
      }
    } else {
      console.log("user not exist please signup the user");
    }
  });
});

app.post("/signup", async (req, res) => {
  const { role,name,email, password } = req.body;

  const data = {
    role:role,
    name:name,
    email: email,
    password: password,
  };
  console.log(data);
  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }
});



const bodyParser = require('body-parser');

// Middleware to parse JSON request body
app.use(bodyParser.json());
// Your MongoDB/Mongoose setup (import your models and connect to the database
// Define a route for adding a mess product
app.post("/addMessProduct", async (req, res) => {
  try {
    const { name, price, pincode, rating, address, images, menu } = req.body; // Keep it as 'images'
    // Save the mess product to the database
    const newMess = new Mess({
      name,
      price,
      pincode,
      rating,
      address,
      images, // Keep it as 'images'
      menu
    });
    
    newMess.save()
      .then(() => {
        console.log('Mess data inserted successfully');
        res.status(200).json({ message: 'Mess data inserted successfully' }); // Send a success response to the client
      })
      .catch((err) => {
        console.error('Error inserting mess data:', err);
        res.status(500).json({ error: 'Internal server error' }); // Send an error response to the client
      });
  } catch (error) {
    // Handle any errors
    console.error('Error adding mess product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// app.get('/addMessProduct',async (req,res) =>{
//   try{
//     const allmessData = await messData.find({});
//     res.stand({status :"ok",data:allmessData})
//   }catch (error){
//     console.log(error);
//   }
// })

// app.get('/addMessProduct', async (req, res) => {
//   try {
//     const allMessData = await MessProduct.find({});
//     setMessData(response.data.data);
//     res.status(200).json({ status: "ok", data: allMessData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ status: "error", message: "Server Error" });
//   }
// });

app.get("/addMessProducts", async (req, res) => {
  try {
    // Retrieve all Mess products from the database
    const messProducts = await Mess.find();
    res.status(200).json(messProducts); // Send the retrieved data as a JSON response
  } catch (error) {
    console.error('Error retrieving mess products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// app.get("/addMessProducts", async (req, res) => {
//   try {
//     // const productId = req.params.productId; // Get the product ID from the request URL parameters

//     // Retrieve the Mess product by its ID
//     const messProduct = await Mess.findOne({pincode: messProduct.pincode });

//     if (messProduct) {
//       // If the product is found, send the pincode as a JSON response
//       res.status(200).json({ pincode: messProduct.pincode });
//     } else {
//       // If the product is not found, send an error response
//       res.status(404).json({ error: 'Product not found' });
//     }
//   } catch (error) {
//     console.error('Error retrieving pincode:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


  app.post("/pincode", async (req, res) => {
    const { pincode } = req.body;
    console.log(req.body);
    const check = await Mess.findOne({ pincode: pincode });
  
    if (check) {
      res.json({ message: "Pincode exists" }); 
    } else {
      res.status(404).json({ error: "Pincode not found" }); 
    }
  });
  

// try {
//   const check = await collection.findOne({ email: email });

  
app.listen(8000, () => {
  console.log("port connect 8000");
});