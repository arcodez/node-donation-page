const { Router } = require("express");
const router = Router();
const { Pool } = require("pg");

/* Conexion a la base de datos */
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "donationpage",
  port: "5432",
}); 

const {
  getUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/index.controller");

router.get("/new-user", (req, res) => {
  res.render("users/new-user");
});
router.get("/delete-user", (req, res) => {
  res.render("users/delete-user");
});

router.get('/users', async (req, res) => {
  const response = await pool.query("SELECT * FROM users;");
  const { name, email } = req.body;
  //console.log(response.rows);
  //res.send('All users')
  res.render('/users/all-users', {
    name,
    email
  })
  res.json(response.rows);
});

//router.get("/users", getUsers);
router.get("users:id", getUserById);
router.post("/new-user", createUser);
router.put("/users:id", updateUser);
router.delete("/delete-user", deleteUser);
//router.delete("/users:id", deleteUser);

module.exports = router;
