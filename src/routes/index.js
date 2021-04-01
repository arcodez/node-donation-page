const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('/contact', (req, res) => {
    res.render('contact')
})
router.get('/products', (req, res) => {
    res.render('products')
})
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


module.exports = router;
