// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var list = require('musebackendrwkama/Datos/modelo/datosalbum');
const albumlist = document.getElementById("albumlist");

function renderAlbums(tasks) {
    albumlist.innerHTML = "";
    tasks.forEach((t) => {
        albumsList.innerHTML += `
          <div id="card" class="card" style="width: 18rem;">
              <img id="imga" src="${t.im}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 id="title" class="card-title">${t.nameal}</h5>
                  <button id="boton" class="btn btn-primary">Go somewhere</button>
              </div>
          </div>
    `;
    });
}
const getA = async () => {
    var al = await list.listamalbumes;
    renderAlbums(al);
};
async function init() {
    getA();
}
init();