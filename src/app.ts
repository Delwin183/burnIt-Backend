import express from "express";
import routes from "./routes";
const morgan = require("morgan");
const cors = require("cors");

const server: express.Application = express();

server.set("name", "burnIt Api");
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/excercises", routes);

module.exports = server;
