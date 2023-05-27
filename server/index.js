import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';

dotenv.config();



const app = express();



app.use(cors());
app.use(express.json());


const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

//creating an instance of chat Server
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/signup", (req, res) => {
    try {
        res.send("Hi from signup!")
    } catch (e) {
      res.send(e);
    }
});

app.post("/login", (req, res) => {
    try {
        res.send("Hi from login!")
    } catch (e) {
      res.send(e);
    }
});



app.listen(2000, () => {
    console.log("Server is running on port 2000");
});