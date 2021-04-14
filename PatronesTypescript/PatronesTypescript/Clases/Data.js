"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const Conection_1 = require("../Conection");
class Data {
    constructor() { }
    static getInstance() {
        if (!Data.instancia) {
            Data.instancia = new Data();
        }
        return Data.instancia;
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            let cn = yield Conection_1.Conexion.uri().connect();
            try {
                //let query = { Namep: 'Ketchup' }
                const collection = cn.db("BDSupermarket").collection("Product");
                const result = yield collection.find({}).toArray();
                let array = [];
                for (var p of result) {
                    var obj = new DTProducto(p._id, p.Namep, p.PriceP);
                    array.push(obj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                return 'Error: ' + e.message;
            }
        });
    }
}
exports.Data = Data;
class DTProducto {
    constructor(idproducto, nameproduct, priceproduct) {
        this._IdP = 0;
        this._NameP = "";
        this._PriceP = 0.00;
        this.IdP = idproducto;
        this.NameP = nameproduct;
        this.PriceP = priceproduct;
    }
    get IdP() {
        return this._IdP;
    }
    set IdP(value) {
        this._IdP = value;
    }
    get NameP() {
        return this._NameP;
    }
    set NameP(value) {
        this._NameP = value;
    }
    get PriceP() {
        return this._PriceP;
    }
    set PriceP(value) {
        this._PriceP = value;
    }
}
//# sourceMappingURL=Data.js.map