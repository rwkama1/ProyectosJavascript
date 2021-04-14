const { exception } = require('console');
var mysql = require('mysql');
const util = require('util');
const em = require('../Entidades/eempleado');

const con = mysql.createConnection({
    host: "bim1mdne82iwqj8gh3pq-mysql.services.clever-cloud.com",
    user: "uh4w1jfv92j5akku",
    password: "PJBcOSmvDC3ceGIJ6TuV",
    database: "bim1mdne82iwqj8gh3pq"

});
const queryy = util.promisify(con.query).bind(con);


async function getEmpleados() {
    sqllist = "SELECT * FROM Empleado WHERE BajaEmpleado=false";
    let rows = await queryy(sqllist);
    let array = [];
    for (var x of rows) {
        objecto = new em.Empleado(x.CedulaEmpleado, x.NomEmpleado, x.Clave, x.Sueldo, x.FechaIngreso.toDateString(), x.BajaEmpleado[0]);
        array.push(objecto);
    }
    return array;
};
async function getEmpleado(cedula) {
    sqlb = "SELECT * FROM Empleado WHERE CedulaEmpleado = ?";
    let x = await queryy(sqlb, cedula);
    objecto = new em.Empleado(x[0].CedulaEmpleado, x[0].NomEmpleado, x[0].Clave, x[0].Sueldo, x[0].FechaIngreso.toDateString(), x[0].BajaEmpleado[0]);
    return objecto;
};
async function insertEmpleado(empleado) {
    sqlinsert = "insert into Empleado values ?";
    values = [[empleado.cedulae, empleado.nome, empleado.clave, empleado.sueldo, empleado.fechaingreso, empleado.bajaempleado]]
    let x = await con.query(sqlinsert, [values]);
    con.end();
};
async function updateEmpleado(empleado) {
    sqlupdate = "UPDATE Empleado SET NomEmpleado= ? ,Clave = ? ,Sueldo= ? ,FechaIngreso= ? WHERE CedulaEmpleado = ?;";
    values = [empleado.nome, empleado.clave, empleado.sueldo, empleado.fechaingreso, empleado.cedulae]
    let x = await con.query(sqlupdate, values);
    con.end();

};
async function deleteEmpleado(empleado) {
    sqldelete = "delete from Empleado where CedulaEmpleado = ?;";
    values = [empleado.cedulae]
    let x = await con.query(sqldelete, values);
    con.end();

};
//Cobradores
async function insertCobrador(cobrador) {
    try {

        con.beginTransaction();
        sqliempleado = "insert into Empleado values ?";
        sqlicobrador = "insert into Cobrador values ?";
        empleadov = [[cobrador.cedulae, cobrador.nome, cobrador.clave, cobrador.sueldo, cobrador.fechaingreso, cobrador.bajaempleado]]
        cobradorv = [[cobrador.cedulae, cobrador.transporte]]
        let em = await con.query(sqliempleado, [empleadov]);
        let co = await con.query(sqlicobrador, [cobradorv]);
        con.commit();
    }
    catch (error) {
        throw exception("Ocurrio un error" + error);
        con.rollback();
    }
    finally
    {
        con.end();
    }
};
async function deleteCobrador(cobrador) {

    con.beginTransaction();
    sqldempleado = "delete from Empleado where CedulaEmpleado = ?;";
    sqldcobrador = "delete from Cobrador where CedulaCobrador = ?;";
    empleadov = [cobrador.cedulae];
    cobradorv = [cobrador.cedulae];
    let co = await con.query(sqldcobrador, [cobradorv]);
    let em = await con.query(sqldempleado, [empleadov]);
    con.commit();
    con.end();

};

async function getCobradores() {
    sqllist = "Select * From Empleado U Inner Join Cobrador a on U.CedulaEmpleado = a.CedulaCobrador where BajaEmpleado=false";
    let rows = await queryy(sqllist);
    let array = [];
    for (var x of rows) {
        objecto = new em.Cobrador(x.CedulaEmpleado, x.NomEmpleado, x.Clave, x.Sueldo, x.FechaIngreso.toDateString(), x.BajaEmpleado[0],x.Transporte);
        array.push(objecto);
    }
    return array;
};

//var c = new em.Cobrador(9999999, "hghfhhjñkl", "ghj", 12000, "2020-1-1", 0,"Auto");
//insertCobrador(c).then(data => {
//    console.log(data)
//})

getCobradores().then(data => {
    console.log(data)
})


setTimeout(function () {
    process.exit();
}, 100000);
