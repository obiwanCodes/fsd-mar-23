import express from "express";
import { getAdventureDetails } from "../controllers/adventureDetails.js";

const router = express.Router();

router.get("/", getAdventureDetails);

export default router;
