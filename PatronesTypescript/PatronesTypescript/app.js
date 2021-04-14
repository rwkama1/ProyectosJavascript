"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaData_1 = require("./FabricaData");
console.log(FabricaData_1.Fabrica.getData().getProducts());
FabricaData_1.Fabrica.getData().getProducts().then(data => {
    console.log(data);
});
//# sourceMappingURL=app.js.map