import { IdCliente } from "./idCliente";
import { Paciente } from "./paciente";

export class Cliente extends IdCliente {
    public nombreCliente : string;
    public telefonoCliente : number;
    public visitas : number = 0;
    public vip : boolean = false;
    public id : string = this.getId();

    protected paciente : Paciente[];

    constructor (nombreCliente : string, telefonoCliente : number) {
        super ();
        this.nombreCliente = nombreCliente;
        this.telefonoCliente = telefonoCliente;
        this.visitas = this.visitas;
        this.paciente = [];
    }
    //getters y setters de la clase
    public getNombreCliente () : string {
        return this.nombreCliente;
    }
    public setNombreCliente (nombreNuevo : string) {
        this.nombreCliente = nombreNuevo;
    }
    public getTelefonoCliente () : number {
        return this.telefonoCliente;
    }
    public setTelefonoCliente (telefonoNuevo : number) {
        this.telefonoCliente = telefonoNuevo;
    }
    public getVisitas () : number {
        return this.visitas;
    }
    public getVip () : void {
        if (this.vip) {
            console.table (`El Cliente ${this.nombreCliente} SI es Vip `);
        } else {
            console.table (`El Cliente ${this.nombreCliente} NO es Vip `);
        }
    }
    //getters del arrays
    public getListaPaciente () : Paciente[]{
        return this.paciente;
    }
    // agregar y eliminar
    public agregarPaciente (paciente : Paciente) :string {
        const i = this.paciente.includes(paciente);
        if (i) {
            return `El paciente ${paciente.nombrePaciente} ya existe`
        } else {
            this.paciente.push (paciente);
            return `El paciente ${paciente.nombrePaciente} fue creado`;
        }
    }
    public eliminarPaciente (nombrePacienteAEliminar : string) :void {
        const indice = this.paciente.findIndex(suc => suc.getNombrePaciente() === nombrePacienteAEliminar);
        if (indice !== -1) {
            this.paciente.splice(indice, 1);
            console.log('\x1b[33m%s\x1b[0m', `El paciente con el nombre ${nombrePacienteAEliminar} fue eliminado con exito.`);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `No se encontro ningun paciente con el nombre ${nombrePacienteAEliminar}.`);
        }
    }
    //Sumar visitas
    public sumarVisita () : void {
        this.visitas = this.visitas + 1;
        if (this.visitas > 4) {
            this.vip = true;
        }
        console.log ('\x1b[31m%s\x1b[0m', `Visita Agregada con exito! El total de visitas hasta el momento son: ${this.visitas}.`);
    }
}
