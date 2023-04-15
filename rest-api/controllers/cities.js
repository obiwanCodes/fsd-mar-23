import { db } from "../server.js";
import { v1 } from "uuid";
// const { cities } = db.data;
import { citySchema } from "../schemas/city.js";

export const getCities = (req, res) => {
  const { q } = req.query;
  if (q === "") {
    res.send(db.data.cities);
    return;
  }
  const filtered = db.data.cities.filter((city) =>
    city.name.toLowerCase().startsWith(q.toLowerCase())
  );
  res.send(filtered);
};

export const getCityById = (req, res) => {
    const reqCity = db.data.cities.find((city) => city.id === req.params.id);
    if (reqCity === undefined) {
       res.status(404).send({
         message: "Cannot find the requested city",
       });
        return; 
    } 
    res.send(reqCity);
}

export const createCity = (req, res) => {
  const { error, value } = citySchema.validate(req.body);
  if (error !== undefined)
  {
    console.log(error)
    res.status(400).send({
      message: "Please follow the request schema"
    })
    return;  
  }
  const { name, description, image } = req.body;
    const newCity = { id: v1(), name: name };
    if (description !== undefined) newCity.description = description;
    if (image !== undefined) newCity.image = image;
    db.data.cities.push(newCity);
    db.write()
    res.status(201).send(newCity);
}

export const replaceCity = (req, res) => {
    const reqCity = db.data.cities.find((city) => city.id === req.body.id);
    if (reqCity === undefined) {
      res.status(404).send({
        message: "Cannot find the requested city",
      });
      return;
    }
    const { id, name, description, image } = req.body;
    if (name === undefined || name === "") {
      res.status(400).send({
        message: "'name' is a required field",
      });
      return;
    }
    reqCity.name = name;
    if (description !== undefined) reqCity.description = description;
    if (image !== undefined) reqCity.image = image;
    db.write();
    res.send(reqCity);
}

export const updateCity = (req, res) => {
    const reqCity = db.data.cities.find((city) => city.id === req.params.id);
    if (reqCity === undefined) {
      res.status(404).send({
        message: "Cannot find the requested city",
      });
      return;
    }
    const { name, description, image } = req.body;
    if (name !== undefined) reqCity.name = name;
    if (description !== undefined) reqCity.description = description;
    if (image !== undefined) reqCity.image = image;
    db.write();
    res.send(reqCity);
}

export const deleteCity = (req, res) => {
    let reqCityIndex;
    db.data.cities.forEach((city, index) => {
        if (city.id === req.params.id){
            reqCityIndex = index;
            return city;
        }
    })
    if (reqCityIndex === undefined){
      res.status(404).send({
        message: "Cannot find the requested city",
      });
      return;
    }
    db.data.cities.splice(reqCityIndex, 1);
    db.write();
    res.status(204).send();
}

export const getAdventuresByCity = (req, res) => {
  const reqCity = db.data.cities.find((city) => city.id === req.params.id);
  if (reqCity === undefined) {
    res.status(404).send({
      message: "Cannot find the requested city",
    });
    return;
  }
  const reqAdventures = db.data.adventures.find((arr) => arr.id === req.params.id)
  if (reqAdventures === undefined) {
    res.status(404).send({
      message: "Could not find adventures for this city",
    });
    return;
  }
  res.send(reqAdventures?.adventures);
}