import { Fabrica } from "./FabricaData";


Fabrica.getData().getProducts().then(data => {
    console.log(data)
})
