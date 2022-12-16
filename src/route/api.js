import express from "express";
import {
  getAllUser,
  createNewUser,
  deleteUserById,
  updateUser,
} from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", getAllUser);
  router.post("/create-user", createNewUser);
  router.put("/update-user", updateUser);
  router.delete("/delete-user/:id", deleteUserById);
  return app.use("/api/v1", router);
};

export default initAPIRoute;
