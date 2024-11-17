import { Cliente } from "./Cliente";
import { Plantilla } from "./plantilla";

export class Paciente extends Plantilla {
    public nombrePaciente: string;
    public edad: number;
    public genero: string;
    public especie: string;
    private id : string = this.getId();

    constructor(nombrePaciente: string, edad: number, genero: string, especie: string) {
        super ();
        this.nombrePaciente = nombrePaciente;
        this.edad = edad;
        this.genero = genero;
        this.especie = especie;
    }
    //getters y setters de la clase
    public getNombrePaciente(): string {
        return this.nombrePaciente;
    }
    public setNombrePaciente(nombreNuevo : string): void {
        this.nombrePaciente = nombreNuevo;
    }
    public getEdad(): number {
        return this.edad;
    }
    public setEdad(edadNueva: number): void {
        this.edad = edadNueva;
    }
    public getGenero(): string {
        return this.genero;
    }
    public setGenero(generoNuevo: string): void {
        this.genero = generoNuevo;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(especieNueva: string): void {
        this.especie = especieNueva;
    }
}