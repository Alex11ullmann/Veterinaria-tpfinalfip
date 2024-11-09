import { Red } from "./Red";
import { Sucursal } from "./Sucursal";

export class Proveedor {
    protected nombre : string;
    protected id : string;
    protected telefono : number;

    constructor (nombre : string, id : string, telefono : number) {
        this.nombre = nombre;
        this.id = id;
        this.telefono = telefono;
    }
}