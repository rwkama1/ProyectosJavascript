import { MongoClient } from "mongodb";

export class Conexion
{
    private static _uri = "mongodb+srv://rwkamandriw:IF3JJQIm00NdGzcq@carlosrodriguezcluster.eaywr.mongodb.net/BDSupermarket?retryWrites=true&w=majority";
    public static uri(): MongoClient {
         const clientcon = new MongoClient(this._uri, { useNewUrlParser: true, useUnifiedTopology: true })
         return clientcon;
    }
}
/*
export const clientcon = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .connect()
    .then(mongoclient => {
        console.log('Connected to MongoDB')
        return mongoclient
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
    */
