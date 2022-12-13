import express from "express";

const configViewEngine = (app) => {
  // câu này để xét những file người dùng được truy cập
  app.use(express.static("./src/public"));
  // Config viewengine for app
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
