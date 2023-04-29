import Listing from "../models/listings.js";

export const getListings = async (req, res) => {
  const listings = await Listing.find();
  res.send(listings);
};

export const createListing = async (req, res) => {
  let newListing;
  try {
    newListing = await Listing.create(req.body);
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
  return res.status(201).send(newListing);
};

export const replaceListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return req.status(404).json({
      name: "HTTP:NOT_FOUND",
      message: "Could not find the listing",
    });
  }
  const updatedListing = await Listing.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  return res.status(200).send(updatedListing);
};

export const removeListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return req.status(404).json({
      name: "HTTP:NOT_FOUND",
      message: "Could not find the listing",
    });
  }
  await Listing.deleteOne({ _id: req.params.id });
  return res.status(204).send();
};
