
var express = require('express');
var router = express.Router();

var list = require('musebackendrwkama/Datos/modelo/datosalbum');



/* GET home page. */
router.get('/', async function (req, res) {
    var datalbum = await list.listamalbumes();
    res.render('index', { datalbum: datalbum});
});

router.get('/ver/(:id)', async function (req, res) {
    var buscaralbum = await list.buscarAlbum(req.params.id);
    var listcanciones = buscaralbum.listsong;
    console.log(listcanciones);
    res.render('ver', { buscaralbum: buscaralbum, listcanciones: listcanciones});
});
module.exports = router;
