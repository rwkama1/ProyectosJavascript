var mysql = require('mysql');
const util = require('util');
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
        objecto = new Empleado(x.CedulaEmpleado, x.NomEmpleado, x.Clave, x.Sueldo, x.FechaIngreso.toDateString(), x.BajaEmpleado[0]);
        array.push(objecto);
    }
    return array;
};
async function getEmpleado(cedula) {
    sqlb = "SELECT * FROM Empleado WHERE CedulaEmpleado = ?";
    let x = await queryy(sqlb, cedula);
    objecto = new Empleado(x[0].CedulaEmpleado, x[0].NomEmpleado, x[0].Clave, x[0].Sueldo, x[0].FechaIngreso.toDateString(), x[0].BajaEmpleado[0]);
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
class Empleado {
    constructor(cedulae, nome, clave, sueldo, fechaingreso, bajaempleado) {
        this.cedulae = cedulae;
        this.nome = nome;
        this.clave = clave;
        this.sueldo = sueldo;
        this.fechaingreso = fechaingreso;
        this.bajaempleado = bajaempleado;

    }
}
//var e = new Empleado(9999999, "hghfhhjñkl", "ghj", 12000, "2020-1-1", 0);
//deleteEmpleado(e).then(data => {
//    console.log(data)
//})

getEmpleados().then(data => {
    console.log(data)
})

setTimeout(function () {
    process.exit();
}, 100000);
