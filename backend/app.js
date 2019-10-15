const express = require("express");
const app = express();

const path = require("path");

const bodyParser = require("body-parser");

const morgan = require("morgan");
const routes = require("./route/appRoute");
const cors = require("cors");

app.use(bodyParser.json());
app.use(morgan("short"));
app.use(cors({ origin: "http://localhost:5000" }));

const port = process.env.PORT || 5000;

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
