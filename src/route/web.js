import express from "express";
import {
  getHomePage,
  getDetailPage,
  createNewUser,
  deleteUser,
  editUser,
  updateUser,
} from "../controller/homeController";

let router = express.Router();

const initWebRote = (app) => {
  router.get("/", getHomePage);
  router.get("/detail/user/:id", getDetailPage);
  router.post("/create-new-user", createNewUser);
  router.post("/delete-user", deleteUser);
  router.get("/edit-user/:id", editUser);
  router.post("/update-user", updateUser);
  router.get("/about", (req, res) => {
    res.send("Hello World");
  });
  return app.use("/", router);
};

export default initWebRote;
