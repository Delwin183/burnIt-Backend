export const express = require("express");
export const morgan = require("morgan");
export const cors = require("cors");

const routes = require("./routes/index");

const server = express();

server.set("name", "burnIt Api");
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/", routes);

module.exports = server;
