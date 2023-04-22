import express from "express";
import {
  getCities,
  getCityById,
  createCity,
  replaceCity,
  updateCity,
  deleteCity,
  getAdventuresByCityId,
} from "../controllers/cities.js";

const router = express.Router();

// '/' represents the basepath of this routes file -> '/cities'
router.get("/", getCities);

router.get("/:id", getCityById);

router.post("/", createCity);

router.put("/", replaceCity);

router.patch("/:id", updateCity);

router.delete("/:id", deleteCity);

router.get("/:id/adventures", getAdventuresByCityId);

// router.post("/:id/adventures", addAdventureToCity);

export default router;
