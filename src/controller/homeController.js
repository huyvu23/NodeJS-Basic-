import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `user`");
  res.render("index.ejs", { data: rows });
  // write logic it here
};

let getDetailPage = async (req, res) => {
  let id = req.params.id;
  let user = await pool.execute("SELECT * FROM `user` WHERE id = ? ", [id]);
  return res.render(JSON.stringify(user));
  // write logic it here
};

export { getHomePage, getDetailPage };
