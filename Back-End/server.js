const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDb conected successfully");
  })
  .catch((error) => {
    console.log('Conection failed,Eror_message:',error);    
  });

app.get('/', (req, res)=>{
    res.json({app:'runing'})
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
