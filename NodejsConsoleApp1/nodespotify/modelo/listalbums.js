var SpotifyWebApi = require('node-spotify-api');

var spotifyApi = new SpotifyWebApi
    ({
        id: '58d4a63fa4b4489697c224afd65b1569',
        secret: '348e57ec20b4443cb3a7b295d94ad52f',
    });
urlalbums = 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI/albums'

async function listamalbumes() {
    const data = await spotifyApi.request(urlalbums);
    var array = [];
    var x, idalbum, nombrealbum, urlalbum;
    for (x of data.items) {
        idalbum = x.id;
        nombrealbum = x.name;
        urlalbum = x.images[0].url;
        aobjectalbum = new Album(idalbum, nombrealbum, urlalbum);
        array.push(aobjectalbum);
    }
    return array
}

class Album {
    idal = 0;
    nameal = " ";
    urlalb = " ";
    constructor(ide, nombre, url) {
        this.idal = ide;
        this.nameal = nombre;
        this.urlalb = url;
    }
}
class Canciones {
    constructor(nombre) {
        this.namesong = nombre;
        
    }
}
module.exports = listamalbumes()