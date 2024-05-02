import express from "express";
import mongoose from "mongoose";
import http from "http";
import { routes } from "./route";

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

const PORT = 3000;
export const TOKEN_KEY = "11223344";
routes(app);
const URL =
  "mongodb+srv://wwwburjsoft:gBLTbWrZsDYS9kR5@cluster0.k2bwmju.mongodb.net/";

server.listen(PORT, () => {
  console.log(`Express server listening ${PORT}`);
  app.get("/", function (req, res) {
    res.send("**** Hello World! ****");
  });
});

async function connection() {
  await mongoose.connect(URL).then(() => {
    console.log("connection success");
  });
}
connection();

export default app;
