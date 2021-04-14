"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conexion = void 0;
const mongodb_1 = require("mongodb");
class Conexion {
    static uri() {
        const clientcon = new mongodb_1.MongoClient(this._uri, { useNewUrlParser: true, useUnifiedTopology: true });
        return clientcon;
    }
}
exports.Conexion = Conexion;
Conexion._uri = "mongodb+srv://rwkamandriw:IF3JJQIm00NdGzcq@carlosrodriguezcluster.eaywr.mongodb.net/BDSupermarket?retryWrites=true&w=majority";
/*
export const clientcon = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .connect()
    .then(mongoclient => {
        console.log('Connected to MongoDB')
        return mongoclient
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
    */
//# sourceMappingURL=Conection.js.map