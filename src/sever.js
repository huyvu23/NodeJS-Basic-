import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRote from "./route/web";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up view Engine
configViewEngine(app);

//init web routes
initWebRote(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
