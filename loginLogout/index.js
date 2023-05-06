import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
connectDB();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/test", (req, res) => res.send("API running"));

app.listen(PORT, () =>
  console.log(`Server is running on http:localhost:${PORT}`)
);
