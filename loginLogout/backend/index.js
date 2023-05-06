import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "./models/userModel.js";
import jwt from "jsonwebtoken";
import authenticate from "./auth.js";
import cors from "cors";
dotenv.config();
connectDB();
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/test", (req, res) => res.send("API running"));

app.post("/register", async (req, res) => {
  let user;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user = new User({
      email: req.body.email,
      password: hashedPassword,
    });
  } catch (error) {
    return res.status(400).send({ message: "Bad request" });
  }

  try {
    const response = await user.save();
    res.status(201).send({
      message: "User created successfully",
      response,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating user",
      error,
    });
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send({
      message: "Please check your credentials",
    });
  }
  const compareResult = await bcrypt.compare(req.body.password, user.password);
  if (!compareResult) {
    return res.status(404).send({
      message: "Please check your credentials",
    });
  }
  // create JWT token
  const token = jwt.sign(
    {
      userId: user._id,
      userEmail: user.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "2h" }
  );

  res.send({
    message: "Login successful",
    email: user.email,
    token,
  });
});

app.get("/unsecureEndpoint", (req, res) => {
  res.send({
    message: "This endpoint does not require authetication",
  });
});

app.get("/secureEndpoint", authenticate, (req, res) => {
  res.send({
    message: "Successfully called secure endpoint",
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http:localhost:${PORT}`)
);
