import express from "express";
import cityRoutes from "./routes/cities.js";
import adventureRoutes from "./routes/adventures.js";
import adventureDetailRoutes from "./routes/adventureDetails.js";
import bodyParser from "body-parser";

import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// File path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");
export const db = new Low(new JSONFile(file));

const readDB = async (req, res) => {
  await db.read();
};
readDB(); //initializes the db with data

const app = express();
const PORT = 5000;

app.get("/", (req, res) => res.send("API running"));

//middleware which will convert the request payload to JSON
app.use(bodyParser.json());

app.use("/cities", cityRoutes);

app.use("/adventures", adventureRoutes);

app.use("/adventures/:id/detail", adventureDetailRoutes);

app.listen(PORT, () =>
  console.log(`The server is running on http://localhost:${PORT}`)
);
