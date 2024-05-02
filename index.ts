import mongoose from "mongoose";
import http from "http";
import { routes } from "./route";
import express, { Request, Response } from "express";

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// const server = http.createServer(app);

app.use(express.json());
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
  
  app.listen(PORT, () => {
  console.log(`Express app listening ${PORT}`);
});
// root routes
app.get("/", (req: Request, res:Response) => {
  res.status(200).json({ message: "Hello Worldsssssssssssss" });
});

async function connection() {
  await mongoose.connect(URL).then(() => {
    console.log("connection success");
  });
}
connection();

export default app;
