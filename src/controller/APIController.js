import pool from "../configs/connectDB";

let getAllUser = async (req, res) => {
  // http
  const [rows, fields] = await pool.execute("SELECT * FROM `user`");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

const createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: "Missing required params",
    });
  }
  await pool.execute(
    "INSERT INTO `user` (firstName,lastName,email,address) VALUES(?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    message: "ok",
  });
};

const deleteUserById = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(200).json({
      message: "Missing ID",
    });
  }
  await pool.execute("DELETE FROM `user` WHERE id=?", [userId]);
  return res.status(200).json({
    message: "Delete Success",
  });
};

const updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(200).json({
      message: "Missing required params",
    });
  }
  await pool.execute(
    "UPDATE `user` SET firstName=?,lastName=?,email=?,address=? WHERE id = ?",
    [firstName, lastName, email, address, id]
  );
  return res.status(200).json({
    message: "Update Success",
  });
};

export { getAllUser, createNewUser, deleteUserById, updateUser };
