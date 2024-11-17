import { Generador } from "./generarid";

export abstract class Plantilla {
    private static id : string;

    constructor () {
        if (Plantilla.id === undefined) {
            Plantilla.id = this.generarId();
        }
    }
    
    //generador id
    private generarId(): string {
        let idGenerado : Generador = new Generador();
        let id = "C/" + idGenerado.generadorId().toString();
        return id;
    }
    protected getId(): string {
        return Plantilla.id;
    }
}