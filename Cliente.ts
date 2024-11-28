import { Paciente } from "./Paciente";

export class Cliente {
    public nombreCliente : string;
    public telefonoCliente : number;
    protected visitas : number = 0;
    protected vip : boolean = false;
    protected id : number;
    protected paciente : Paciente[];
    
    constructor (nombreCliente : string, telefonoCliente : number, id : number) {
        this.nombreCliente = nombreCliente;
        this.telefonoCliente = telefonoCliente;
        this.visitas = this.visitas;
        this.paciente = [];
        this.id = id;
    }
    //getters y setters de la clase
    public getId(): number {
        return this.id;
    }
    private setId(idNuevo: number): void {
        this.id = idNuevo;
    }
    public getNombreCliente () : string {
        return this.nombreCliente;
    }
    private setNombreCliente (nombreNuevo : string) {
        this.nombreCliente = nombreNuevo;
    }
    public getTelefonoCliente () : number {
        return this.telefonoCliente;
    }
    private setTelefonoCliente (telefonoNuevo : number) {
        this.telefonoCliente = telefonoNuevo;
    }
    private getVisitas () : number {
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
            return `El paciente ${paciente.nombrePaciente} ya existe`;
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
