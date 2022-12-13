import express from "express";
import { getHomePage } from "../controller/homeController";

let router = express.Router();

const initWebRote = (app) => {
  router.get("/", getHomePage);
  router.get("/about", (req, res) => {
    res.send("Hello World");
  });
  return app.use("/", router);
};

export default initWebRote;
