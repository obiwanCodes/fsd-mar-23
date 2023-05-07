import express from "express";
import axios from "axios";
import { createClient } from "redis";
const redisClient = createClient();
redisClient.on("error", (err) => console.log("Redis Client Error", err));
await redisClient.connect();

const app = express();
const PORT = 5001;

app.get("/users", async (req, res) => {
  const users = await redisClient.get("users");
  if (users) {
    console.log("cache hit");
    return res.send(JSON.parse(users));
  }
  console.log("cache miss");
  const response = await axios.get(`https://api.github.com/users`);
  redisClient.setEx("users", 120, JSON.stringify(response.data));
  res.send(response.data);
});

app.get("/users/:login", async (req, res) => {
  const login = req.params.login;
  const user = await redisClient.get(`users/${login}`);
  if (user) {
    console.log("cache hit");
    return res.send(JSON.parse(user));
  }
  console.log("cache miss");
  const response = await axios.get(`https://api.github.com/users/${login}`);
  redisClient.setEx(`users/${login}`, 120, JSON.stringify(response.data));
  res.send(response.data);
});

app.listen(PORT, () =>
  console.log(`Server is running on http:localhost:${PORT}`)
);
