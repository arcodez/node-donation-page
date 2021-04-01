const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "donationpage",
  port: "5432",
});

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users;");
  //console.log(response.rows);
  res.json(response.rows);
  const Users = response.rows;
  //res.send('All users')
  //res.render('/users/all-users')
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const errors = [];
  if (!name) {
    errors.push({ text: "Please Insert a Name" });
  }
  if (!email) {
    errors.push({ text: "Please Insert a Email" });
  }
  if (errors.length > 0) {
    res.render("users/new-user", {
      errors,
      email,
      name,
    });
  } else {
    response = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
    console.log(name, email)
    console.log("User created sucessfully");  
    res.redirect('/users');
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  console.log(response);
  res.send("User deleted sucessfully");
};
const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const id = req.params.id;
  const response = await pool.query(
    "UPDATE users SET name = $1, email = $2, WHERE id = $3",
    [name, email, id]
  );
  console.log(response);
  res.send(`User Update ${id} Sucessfully`);
};
const getUserById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  console.log("user" + id);
  res.json(response.rows);
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
};
