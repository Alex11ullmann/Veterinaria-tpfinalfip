import { Generador } from "./generarid";

export abstract class IdCliente {
    private static id : string;

    constructor () {
        if (IdCliente.id === undefined) {
            IdCliente.id = this.generarId();
        }
    }
    
    //generador id
    private generarId(): string {
        let idGenerado : Generador = new Generador();
        let id = "C/" + idGenerado.generadorId().toString();
        return id;
    }
    protected getId(): string {
        return IdCliente.id;
    }
}