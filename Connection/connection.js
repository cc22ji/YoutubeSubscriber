require('dotenv').config()
const mongoose = require("mongoose");
// const url ="mongodb+srv://chetanchouhan222:Everst%40321@cluster0.axajown.mongodb.net/?retryWrites=true&w=majority";

//Connect To DATABASE
async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL); //,{dbName:"<collectionName>"}
    console.log("db Connected");
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = dbConnect;
