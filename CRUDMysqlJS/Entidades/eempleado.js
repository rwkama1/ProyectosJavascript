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
class Cobrador extends Empleado{
    constructor(cedulae, nome, clave, sueldo, fechaingreso, bajaempleado, transporte) {
        super(cedulae, nome, clave, sueldo, fechaingreso, bajaempleado)
        this.transporte = transporte;

    }
}
module.exports = { Empleado ,Cobrador};