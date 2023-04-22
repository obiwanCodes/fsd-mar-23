import express from "express";
import { getAdventures, createAdventure } from "../controllers/adventures.js";

const router = express.Router();

router.get("/", getAdventures);

router.post("/", createAdventure);

export default router;
