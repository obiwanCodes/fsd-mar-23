var http = require("http");
http
  .createServer(function (req, res) {
    if (req.url === "home") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Hello World!");
    }
    if (req.url === "profile") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("profile page!");
    }
  })
  .listen(8080);
