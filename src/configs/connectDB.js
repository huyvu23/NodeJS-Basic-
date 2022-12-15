import mysql from "mysql2/promise";

// create connect DB
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "19036579711014Alo",
  database: "NodeJSBasic",
});

export default pool;
