//import { Album } from 'Album.js';
var SpotifyWebApi = require('node-spotify-api');

var spotifyApi = new SpotifyWebApi
    ({
        id: '58d4a63fa4b4489697c224afd65b1569',
        secret: '348e57ec20b4443cb3a7b295d94ad52f',
    });
urlalbums = 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI/albums'
 
 async function listamalbumes()
{
     const data = await spotifyApi.request(urlalbums);
            var array = [];
            var x;
            var idalbum;
            var nombrealbum;
            for (x of data.items) {
                idalbum = x.id;
                nombrealbum = x.name;
                aobjectalbum = new Album(idalbum, nombrealbum);
                array.push(aobjectalbum);
     }
     return array
}

var res = listamalbumes();
res.then(data => { 
    var y;
    for (y of data)
    {
        console.log(y.nameal + "   " + y.idal)
    }
})



//var y;
//list = listalbums();
//console.log(list);
//for (y of list)
//{
//   
//}

setTimeout(function () {
    process.exit();
}, 100000);

class Album {
     
    idal = 0;
    nameal = " ";
     constructor(ide, nombre) {
         this.idal = ide;
         this.nameal = nombre;

    }
}

//function listamalbumes() {
//    spotifyApi.request(url)
//        .then(data => {
//            return data;
//        }).then(data => {
//            var array = [];
//            var x;
//            var idalbum;
//            var nombrealbum;
//            for (x of data.items) {
//                idalbum = x.id;
//                nombrealbum = x.name;
//                aobjectalbum = new Album(idalbum, nombrealbum);
//                array.push(aobjectalbum);
//            }
//            return array;
//        });
//}
//}
//list = listalbums();
//ide = x.id;
//nombre = x.nombre;
//var x;
//for (x of list) {
//    console.log(x.name)
//}

//var resultado = spotifyApi.getArtistAlbums(idmuse, { limit: 20, offset: 0 });
//console.log(resultado.body);

//spotifyApi.getArtistAlbums(
//    idmuse,
//    limitofset,
//    function (err, data) {
//        albumes.push(data.body.items.length)
       
//        console.log(data.body.items);
//    });

   
//var Spotify = require('node-spotify-api');



//    var spotify = new Spotify({
//        id: "58d4a63fa4b4489697c224afd65b1569",
//        secret: "348e57ec20b4443cb3a7b295d94ad52f"
//});
//    array
//    url = 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI/albums'

//spotify.request(url, function (response, body)
//{

//}
//    (function (response,data) {
//        arrray.push(data)


//    })


//var request = require('request');
//url = 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI/albums'
//token ='BQDQBoY2fjEEtaeNP7ZGvI8v5KIhd6svToR6L26NKQ-l19G5-kHiIIq84iMt0EK_ntKrwVsJYSLRWQLa8gHbZRylVc14EOtQoQ7UageMqjXL-g7mp3y8vxhG1BznYSG1QJgaE9Mz7lzwUYL4opkZ3cq0omWOiUm-vTLJHJgyu9yLtuD2TxMTpuzvcYJ685sJCZZ-i9bVKPPoUCiHeKJVka-fROBaGbPxXJoAayg6zCPnK3NOgwYAXN2b44AqYBNuitNN_zf3coLthIqcJJwy4vFEH7rkFto1'

//var authOptions1 = {
//    url: url,
//    headers: {
//        'Authorization': 'Bearer ' + token,
//        'Content-Type': 'application/json',
//    }
//};

//request.get(authOptions1, function (error, response, body) {
//    console.log(body);
//});










  //              .then(function (data) {
  //                  console.log(data);
  //          })
  //.catch(function(err) {
  //              console.error('Error occurred: ' + err); 
  //});
