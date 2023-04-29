import express from "express";
import {
  getListings,
  createListing,
  removeListing,
  replaceListing,
} from "../controllers/listings.js";

const router = express.Router();

router.get("/", getListings);
router.post("/", createListing);
router.put("/:id", replaceListing);
router.delete("/:id", removeListing);

export default router;
