var axios = require('axios');
var urlweb = 'https://productimageapi.herokuapp.com/';
var config = {
    method: 'get',
    url: urlweb
};
const getrequestP = async () => {
    const response = await axios(config);
    var array = [];
    for (var x of response.data) {
        var aobjectalbum = new Producto(x.idproducto, x.imgproducto);
        array.push(aobjectalbum);
    }
    return array
}

class Producto {
    constructor(idproducto, imgproducto) {
        this.idproducto = idproducto;
        this.imgproducto = imgproducto;

    }
}
getrequestP().then(data => {
    console.log(data)
})
//axios(config)
//    .then(function (response) {
//        console.log(JSON.stringify(response.data));
//    })
//    .catch(function (error) {
//        console.log(error);
//    });