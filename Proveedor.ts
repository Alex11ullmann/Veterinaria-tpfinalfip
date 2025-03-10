import { Generador } from "./generarid";

export class Proveedor {
    public nombreProveedor : string;
    public telefonoProveedor : number;
    protected id : string;

    constructor (nombreProveedor : string, telefonoProveedor : number) {
        this.nombreProveedor = nombreProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.id = this.generarId();
    }
    //getters y setters de la clase
    private getNombreProveedor () : string {
        return this.nombreProveedor;
    }
    private setNombreProveedor (nombreNuevo : string) {
        this.nombreProveedor = nombreNuevo;
    }
    private getTelefonoProveedor () : number {
        return this.telefonoProveedor;
    }
    private setTelefonoProveedor (telefonoNuevo : number) {
        this.telefonoProveedor = telefonoNuevo;
    }
    //generador id
    private generarId(): string {
        let idGenerado : Generador = new Generador();
        let id = "P/" + idGenerado.generadorId().toString();
        return id;
    }
    //getter del generador de id
    public getId(): string {
        return this.id;
    }
}