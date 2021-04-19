const { Router } = require("express");
const router = Router();

router.get("/menu", (req, res) => {
    res.render('menu/inicio', {layout: 'menu'})
});
router.get("/menu/login", (req, res) => {
    res.render('menu/login', {layout: 'menu'})
});
router.get("/menu/products", (req, res) => {
    res.render('menu/products', {layout: 'menu'})
});
router.get("/menu/accounts", (req, res) => {
    res.render('menu/accounts', {layout: 'menu'})
});
router.get("/menu/add-product", (req, res) => {
    res.render('menu/add-product', {layout: 'menu'})
});
router.get("/menu/edit-product", (req, res) => {
    res.render('menu/edit-product', {layout: 'menu'})
});

module.exports = router;
