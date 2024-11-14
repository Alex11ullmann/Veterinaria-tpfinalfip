import { Cliente } from "./Cliente";
import { Red } from "./Red";
import { Sucursal } from "./Sucursal";

export class Paciente extends Cliente {
    public nombrePaciente: string;
    public edad: number;
    public genero: string;
    public especie: string;

    constructor(nombrePaciente: string, edad: number, genero: string, especie: string, nombreCliente: string, telefonoCliente: number, idCliente: string) {
        super(nombreCliente, telefonoCliente, idCliente);
        this.nombrePaciente = nombrePaciente;
        this.edad = edad;
        this.genero = genero;
        this.especie = especie;
    }

    public getNombrePaciente(): string {
        return this.nombrePaciente;
    }
    public setNombrePaciente(nombrePaciente: string): void {
        this.nombrePaciente = nombrePaciente;
    }
    public getEdad(): number {
        return this.edad;
    }
    public setEdad(edad: number): void {
        this.edad = edad;
    }
    public getGenero(): string {
        return this.genero;
    }
    public setGenero(genero: string): void {
        this.genero = genero;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(especie: string): void {
        this.especie = especie;
    }


}