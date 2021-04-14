'use strict';
var express = require('express');
var router = express.Router();
var list = require('musebackendrwkama/Datos/modelo/datosalbum');
/* GET users listing. */
router.get('/', async function (req, res) {
    var datalbum = await list.listamalbumes();
    res.send(datalbum);
});

module.exports = router;
