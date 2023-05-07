const fs = require("fs");

fs.open("/rest-api/server.js", "r", (err, fd) => {
  console.log("file opened");
});
