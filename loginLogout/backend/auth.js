import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send({
      message: "You are not authorized",
    });
  }
};

export default authenticate;
