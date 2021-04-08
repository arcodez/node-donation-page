const { Router } = require("express");
const router = Router();

const { initDB } = require("../helpers/intiDB");

/* Conexion a la base de datos */
const pool = initDB();

const {
  getUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/index.controller");

/* Obtener Todos los Usuarios */
router.get("/users", getUsers);

/* Crear Usuario */
router.get("/users/add", (req, res) => {
  res.render("users/new-user");
});
router.post("/users/new-user", createUser);

/* Eliminar Usuario */
router.delete("/users/delete-user/:id", deleteUser);

/* Editar Usuario */
router.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  User = response.rows;
  res.render("users/edit-user", { User });
});
router.put("/users/edit-user/:id", updateUser);

//router.get("users:id", getUserById);

module.exports = router;
