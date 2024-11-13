import { Red } from "./Red";
import { Sucursal } from "./Sucursal";

export class Proveedor {
    protected nombreProveedor : string;
    protected idProveedor : string;
    protected telefonoProveedor : number;

    constructor (nombreProveedor : string, idProveedor : string, telefonoProveedor : number) {
        this.nombreProveedor = nombreProveedor;
        this.idProveedor = idProveedor;
        this.telefonoProveedor = telefonoProveedor;
    }
}