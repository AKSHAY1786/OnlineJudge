const express=require('express') // create an express server
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
dotenv.config();
app.use(express.json())
mongoose.connect(process.env.MONGO_URL ).then(
console.log("Connected to mongo")).catch((err)=>console.log(err));

app.use("/api/auth",authRoute)
app.listen("5000",()=>{
console.log("Connection is up");
})