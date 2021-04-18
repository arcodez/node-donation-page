const { Router } = require("express");
const router = Router();


/* Obtener Todos los Usuarios */
router.get("/menu", (req, res) => {
    res.render('menu/inicio', {layout: 'menu'})
});

module.exports = router;
