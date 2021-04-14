import { Conexion } from "../Conection";
import { IData } from "../Interfaces/IData";


export  class Data implements IData {
    private static instancia: Data;
    private constructor() { }
    public static getInstance(): Data {
        if (!Data.instancia) {
            Data.instancia = new Data();
        }

        return Data.instancia;
    }
    public async getProducts(): Promise<any> {
        let cn =  await Conexion.uri().connect();
      
        try {

            //let query = { Namep: 'Ketchup' }

            const collection = cn.db("BDSupermarket").collection("Product");
            const result =await  collection.find({}).toArray();
            
            let array = [];
            for (var p of result) {
                var obj = new DTProducto(p._id, p.Namep, p.PriceP)
                array.push(obj);
            }
            
            return array;
            cn.close();
            
        }
        catch (e) {
            return 'Error: '+ e.message;
        }
       
    }
}
class DTProducto {
    _IdP = 0;
    get IdP() {
        return this._IdP;
    }
    set IdP(value) {
        this._IdP = value;
    }
    _NameP = "";
    get NameP() {
        return this._NameP;
    }
    set NameP(value) {
        this._NameP = value;
    }
    _PriceP = 0.00;
    get PriceP() {
        return this._PriceP;
    }
    set PriceP(value) {
        this._PriceP = value;
    }

    constructor(idproducto, nameproduct, priceproduct) {
        this.IdP = idproducto;
        this.NameP = nameproduct;
        this.PriceP = priceproduct;
    }
}