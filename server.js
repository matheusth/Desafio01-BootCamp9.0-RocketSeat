const express = require("express");
const routes = require("./routes");
const app = express();
var numReq = 0;
/*This is a global Middleware that count the number of requests*/
function countRequests(req, res, next) {
  console.log(++numReq);
  next();
}

app.use(countRequests);
app.use(express.json());
app.use(routes);
app.listen(3000);
