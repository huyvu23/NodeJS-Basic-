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

const createNewUser = async (req, res) => {
  // console.log("Check Request", req.body);
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "INSERT INTO `user` (firstName,lastName,email,address) VALUES(?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

const deleteUser = async (req, res) => {
  let { userId } = req.body;
  await pool.execute("DELETE FROM `user` WHERE id=?", [userId]);
  return res.redirect("/");
};

export { getHomePage, getDetailPage, createNewUser, deleteUser };
