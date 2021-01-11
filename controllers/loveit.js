const express = require('express');
const router = express.Router();


router.get('/animals', (req, res) =>{
    res.render('loveit/animals', {animals: ['Quokkas', 'derpy animals']});
});

router.get('/foods', (req, res) =>{
    res.render('loveit/foods', {foods: ['cheese', 'anything pumpkin spice']});
});

module.exports = router;