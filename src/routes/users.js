const { Router } = require("express");
const router = Router();
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

router.get('/users', (req, res) => {
    res.render('users/all-users');
})

router.get("/users", getUsers);
router.get("users:id", getUserById);
router.post("/new-user", createUser);
router.put("/users:id", updateUser);
router.delete("/users:id", deleteUser);

module.exports = router;
