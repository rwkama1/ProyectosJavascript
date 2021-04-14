const fabrica = require("testingpatternss/PatronesTypescript/FabricaData").Fabrica;

fabrica.getData().getProducts().then(data => {
    console.log(data)
})