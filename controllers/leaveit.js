const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) =>{
    res.render('leaveit/movies', {movies: ['Love Actually', 'Love Actually (seriously, every relationship in this movie is super unhealthy)']});
});
router.get('/products', (req, res) =>{
    res.render('leaveit/products', {products: ['bath bombs', 'raisins in cookies']});
});

module.exports = router;