//'use strict';

//import { listamalbumes } from '/modelo/listalbums.js';
var express = require('express');
var router = express.Router();
const list = require('../modelo/listalbums');



/* GET home page. */
router.get('/', async function (req, res) {

    var datalbum = await list;
    
    //datalbum.then(data => {
    //    //var y;

    //    //for (y of data) {
    console.log(datalbum)
    //    //}
    //})
   
    //{ albums: dataalbums }
    //dataalbums.then(data => {
        //var y;
        //for (y of data) {
   
    res.render('index', { datalbum: datalbum});
    //});
});

/*title: 'Express'*/
module.exports = router;
