const dbconection = require('./conectionDB').client;

async function getProducts() {
    const conection = await dbconection.connect();
    try {

        //let query = { Namep: 'Ketchup' }
        
        const collection = conection.db("BDSupermarket").collection("Product");
        const result = await collection.find({}).toArray();
        let array = [];
        for (var p of result)
        {
            var obj = new DTProduct(p._id, p.Namep, p.PriceP)
            array.push(obj);
        }
        conection.close();
        return array;
        
       

    }
    catch (e) {
        return e.message
    }


}
async function getProduct(name) {
    const conection = await dbconection.connect();
    try {

        let query = { Namep: name }
        const collection = conection.db("BDSupermarket").collection("Product");
        const p = await collection.findOne(query);
        
        var obj = new DTProduct(p._id, p.Namep, p.PriceP);
        return obj;
        conection.close();

    }
    catch (e) {
        return e.message
    }
  

}
async function insertProduct(dtproduct)
{
    const conection = await dbconection.connect();
    try {
        const col = conection.db("BDSupermarket").collection("Product");
        
        let query = {Namep: dtproduct.namep, PriceP: dtproduct.pricep };
        const result = await col.insertOne(query);
        return "Added product "+result.insertedId;
        conection.close();

    }
    catch (e) {
        return e.message
    }

}
async function updateProduct(dtproduct) {
    const conection = await dbconection.connect();
    try {

        let query = {Namep: dtproduct.namep};
        var newvalues = { $set: {PriceP: dtproduct.pricep } };
        const result = conection.db("BDSupermarket").collection("Product").updateOne(query, newvalues);
        return "Modified Product";
        conection.close();

    }
    catch (e) {
        return e.message
    }

}
async function deleteProduct(dtproduct) {
    const conection = await dbconection.connect();
    try {

        let query = { Namep: dtproduct.namep };
        const result = conection.db("BDSupermarket").collection("Product").deleteOne(query);
        conection.close();
        return "Deleted Product";
        

    }
    catch (e) {
        return e.message
    }

}
class DTProduct
{
    _id = "";
    _namep = "";
    _pricep = 0;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    
    get namep() {
        return this._namep;
    }
    set namep(value) {
        this._namep = value;
    }
    
    get pricep() {
        return this._pricep;
    }
    set pricep(value) {
        this._pricep = value;
    }
    constructor(idd, name, price)
    {
        this.id = idd;
        this.namep = name;
        this.pricep = price
    }
}

var pr = new DTProduct(0, "asfgsag", 78);
//updateProduct(pr).then(datad1 => {
//    console.log(datad1);
//})
//deleteProduct(pr).then(datad1 => {
//    console.log(datad1);
//})
//insertProduct(pr).then(datad1 => {
//    console.log(datad1);
//})

//getProducts().then(datad1 => {
//    console.log(datad1);
//})
//getProduct("Ketchup").then(datad1 => {
//    console.log(datad1);
//})
