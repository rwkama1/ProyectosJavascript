// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.

(function () {
    
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

     function onDeviceReady() {
        //var list = require('musebackendrwkama/Datos/modelo/datosalbum');
          srci = "https://www.progarchives.com/progressive_rock_discography_covers/2122/cover_264451672017_r.jpg";
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        //var datalbum = await list.listamalbumes();
        //document.getElementById("imga").in.src = ;
        //var parentElement = document.getElementById('deviceready');
        //var image = parentElement.querySelector("img").src = ;
    
        //src = 
       

        
    };
   

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
} )();