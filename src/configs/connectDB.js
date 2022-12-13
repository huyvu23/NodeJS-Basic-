import mysql from "mysql2";

// create connect DB
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19036579711014Alo",
  database: "NodeJSBasic",
});

export default connection;
