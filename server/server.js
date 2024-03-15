import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';



dotenv.config();

connectDB();
const app = express();


const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse json data in req.body
app.use(cookieParser()); 
app.use(express.urlencoded({extended: true}));  //to parse the data in req.body 

//Routes
app.use("/api/users",userRoutes)

app.listen(PORT, () => console.log(`RUNNING ON PORT: ${PORT}`))

