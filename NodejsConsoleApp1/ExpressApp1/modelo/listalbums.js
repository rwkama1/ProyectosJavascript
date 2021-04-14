var SpotifyWebApi = require('node-spotify-api');

var spotifyApi = new SpotifyWebApi
    ({
        id: '58d4a63fa4b4489697c224afd65b1569',
        secret: '348e57ec20b4443cb3a7b295d94ad52f',
    });
idmuse = '12Chz98pHFMPJEknJQMWvI'
urlalbums = 'https://api.spotify.com/v1/artists/' + idmuse + '/albums'

async function listamalbumes() {
    const data = await spotifyApi.request(urlalbums);
    var array = [];
    var images = [];
    var x, idalbum, nombrealbum;
    for (x of data.items) {
        idalbum = x.id;
        nombrealbum = x.name;
        images = x.images[0].url;
        aobjectalbum = new Album(idalbum, nombrealbum, images, listcanciones(idalbum));
        array.push(aobjectalbum);
    }
    return array
}
async function listcanciones(id) {
    urlsong='https://api.spotify.com/v1/albums/'+id+'/tracks'
    const data = await spotifyApi.request(urlsong);
    var array = [];
    var x, nombresong;
    for (x of data.items) {
        nombrealbum = x.name;
        aobjectsong = new Cancion(nombresong);
        array.push(aobjectsong);
    }
    return array
}
async function buscarAlbum(id) {
    urlsong = 'https://api.spotify.com/v1/albums/' + id 
    const data = await spotifyApi.request(urlsong);
    aobjectalbum = new Album(data.id, data.name, data.images[0].url, listcanciones(idalbum));
    return array
}

class Album {
    constructor(ide, nombre, imagenes,listacanciones) {
        this.idal = ide;
        this.nameal = nombre;
        this.im = imagenes;
        this.listsong = listacanciones;
    }
}
class Cancion {
    constructor(nombre) {
        this.namesong = nombre;

    }
}
module.exports = listamalbumes()
//module.exports = buscarAlbum(id)
