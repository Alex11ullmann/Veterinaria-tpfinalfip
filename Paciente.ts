import { Cliente } from "./cliente";

export class Paciente extends Cliente {
    public nombrePaciente: string;
    protected edad: number;
    protected genero: string;
    protected especie: string;
    protected id : number;

    constructor(nombrePaciente: string, edad: number, genero: string, especie: string, nombreCliente : string, telefonoCliente : number, id : number) {
        super (nombreCliente, telefonoCliente, id);
        this.nombrePaciente = nombrePaciente;
        this.edad = edad;
        this.genero = genero;
        this.especie = especie;
        this.nombreCliente = this.getNombreCliente();
        this.telefonoCliente = this.getTelefonoCliente();
        this.id = this.getId();
    }
    //getters y setters de la clase
    public getNombrePaciente(): string {
        return this.nombrePaciente;
    }
    public setNombrePaciente(nombreNuevo : string): void {
        this.nombrePaciente = nombreNuevo;
    }
    private getEdad(): number {
        return this.edad;
    }
    public setEdad(edadNueva: number): void {
        this.edad = edadNueva;
    }
    private getGenero(): string {
        return this.genero;
    }
    public setGenero(generoNuevo: string): void {
        this.genero = generoNuevo;
    }
    private getEspecie(): string {
        return this.especie;
    }
    public setEspecie(especieNueva: string): void {
        this.especie = especieNueva;
    }
}