const { initDB } = require("../helpers/intiDB");

/* Conexion a la base de datos */
const pool = initDB();

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users;");
  const Users = await response.rows;
  //res.json(response.rows)
  res.render('users/all-users', { Users });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  try {
    const response = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id]);
    console.log(response)
    res.redirect('/users')
  } catch (error) {
    console.log(error)
  }
  //res.send(`User Update ${id} Sucessfully`);
};


const getUserById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  console.log("user" + id);
  res.json(response.rows);
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
  const id = req.params.id
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  //console.log(response);
  res.redirect('/users');
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
};
