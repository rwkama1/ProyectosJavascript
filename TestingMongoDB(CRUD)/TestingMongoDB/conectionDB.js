const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rwkamandriw:rwkamandriw@carlosrodriguezcluster.eaywr.mongodb.net/BDSupermarket?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = { client };
