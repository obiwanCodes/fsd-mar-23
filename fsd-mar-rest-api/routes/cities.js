import express from "express";
import {
  getCities,
  getCityById,
  createCity,
  replaceCity,
  updateCity,
  deleteCity
} from "../controllers/cities.js";
const router = express.Router();

// '/' represents the basepath of this routes file -> '/cities'
router.get("/", getCities);

router.get("/:id", getCityById);

router.post("/", createCity);

router.put("/", replaceCity);

router.patch("/:id", updateCity);

router.delete("/:id", deleteCity);

export default router;