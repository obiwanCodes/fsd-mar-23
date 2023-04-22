import { db } from "../server.js";
import { v1 } from "uuid";
import { adventureSchema } from "../schemas/adventure.js";

export const getAdventures = (req, res) => {
  const { city } = req.query;

  if (city === "" || city === undefined) {
    const allAdventures = db.data.adventures.reduce(
      (accumulator, currentValue) =>
        accumulator.concat(currentValue.adventures),
      []
    );
    return res.send(allAdventures);
  }

  const reqCity = db.data.cities.find((cityObj) =>
    cityObj.name.toLowerCase().startsWith(city.toLowerCase())
  );

  if (reqCity === undefined) {
    return res.status(404).send({
      message: "Cannot find the requested city",
    });
  }

  const reqAdventures = db.data.adventures.find((arr) => arr.id === reqCity.id);

  if (reqAdventures === undefined) {
    return res.status(404).send({
      message: "Could not find adventures for this city",
    });
  }
  return res.send(reqAdventures?.adventures);
};

export const createAdventure = (req, res) => {
  const { error, value } = adventureSchema.validate(req.body);
  if (error !== undefined) {
    console.log(error);
    return res.status(400).send({
      message: "Please follow the request schema",
    });
  }
  const { name, costPerHead, currency, cityId, image, duration, category } =
    req.body;
  const reqCity = db.data.cities.find((city) => city.id === cityId);
  if (reqCity === undefined) {
    return res.status(404).send({
      message: "Cannot create an adventure as the cityId doesn't exist",
    });
  }

  const newAdventure = { id: v1(), name, costPerHead, image, duration };
  if (category !== undefined) newAdventure.description = category;

  const reqAdventureObject = db.data.adventures.find(
    (arr) => arr.id === reqCity.id
  );
  console.log(reqAdventureObject);
  if (reqAdventureObject === undefined) {
    db.data.adventures.push({
      id: reqCity.id,
      adventures: [newAdventure],
    });
    db.write();
  } else {
    reqAdventureObject.adventures.push(newAdventure);
    db.write();
  }
  return res.status(201).send(newAdventure);
};
