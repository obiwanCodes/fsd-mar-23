import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
connectDB();
const app = express();
const PORT = 5000;

app.get("/test", (req, res) => res.send("API running"));

// app.get('/listings', async (req, res) => {
//     const listings = await
// })

app.listen(PORT, () =>
  console.log(`Server is running on http:localhost:${PORT}`)
);
