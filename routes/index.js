const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {layout: 'homeLayout.hbs'});
});

router.get('/males', (req, res)=>{
    res.render('males');
});

router.get('/females', (req, res)=>{
    res.render('females');
});

router.get('/puppies', (req, res)=>{
    res.render('puppies');
});

router.get('/breeds', (req, res)=>{
    res.render('breeds');
});

router.get('/contact', (req, res)=>{
    res.render('contact');
});


module.exports = router;