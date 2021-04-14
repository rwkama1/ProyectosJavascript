'use strict';
var express = require('express');
var router = express.Router();
const v = require("crudproductimagesqlserver/dproducto");
/* GET home page. */
router.get('/', async function (req, res) {
    const data = await v.getProducts();
    //const data = await v.getProducts();
    console.log(data);
    res.render('index', { productos: data });
});
router.post('/submit-filter', async function (req, res) {//Recordar que los post submit se tienen que poner como ruta /submit- y el nombre
    const data = await v.getProductsExpression(req.body.search);
    console.log(data);
    res.render('index', { productos: data });
});
module.exports = router;

 