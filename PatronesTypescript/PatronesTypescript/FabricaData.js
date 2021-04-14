"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fabrica = void 0;
const Data_1 = require("./Clases/Data");
class Fabrica {
    static getData() {
        return (Data_1.Data.getInstance());
    }
}
exports.Fabrica = Fabrica;
//# sourceMappingURL=FabricaData.js.map