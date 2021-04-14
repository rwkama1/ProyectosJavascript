const fabrica = require("./PatronesTypescript/FabricaData").Fabrica;
fabrica.getData().getProducts().then(data => {
    console.log(data);
});
