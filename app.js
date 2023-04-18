//If we write type:"module" in package.json then we can also use import statements like react

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
export const app=express();
const corsOptions = {
  origin: ['http://localhost:3000', 'https://sheelpandya.netlify.app']
}

app.use(cors(corsOptions));

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true,limit:"50mb"})); // to send larger size photos
app.use(cookieParser());

import {userRouter} from "./routes/User.js";

app.use("/api/v1",userRouter);

app.use(express.static(path.resolve("../frontend/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve("../frontend/build/index.html"));
})