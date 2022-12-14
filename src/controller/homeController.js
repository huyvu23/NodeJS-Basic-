import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `user`", function (err, results, fields) {
    data = results.map((row) => row);
    return res.render("index.ejs", { data: data });
  });
  // write logic it here
};

export { getHomePage };
