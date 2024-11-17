import { Paciente } from "./Paciente";
import { Generador } from "./generarid";
import { Plantilla } from "./plantilla";

export class Cliente extends Plantilla {
    public nombreCliente : string;
    protected telefonoCliente : number;
    protected visitas : number = 0;
    protected vip : boolean = false;
    private id : string = this.getId();

    protected paciente : Paciente[];

    constructor (nombreCliente : string, telefonoCliente : number) {
        super ();
        this.nombreCliente = nombreCliente;
        this.telefonoCliente = telefonoCliente;
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
    public getVip () : string {
        if (this.vip) {
            return "Si";
        } else {
            return "No";
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
    public eliminarPaciente (pacienteAEliminar : Paciente) :string {
        if (pacienteAEliminar != undefined && this.paciente.includes(pacienteAEliminar)) {
            const iPaciente : number = this.paciente.indexOf (pacienteAEliminar);
            this.paciente.splice (iPaciente, 1);
            return `El paciente ${pacienteAEliminar.nombrePaciente} fue eliminado`;
        } else {
            return `El paciente ${pacienteAEliminar.nombrePaciente} NO existe`;
        }
    }
    public sumarVisita () : number {
        this.visitas = this.visitas + 1;
        if (this.visitas > 4) {
            this.vip = true;
        }
        return this.visitas; //verificar
    }
}

let dogi : Paciente = new Paciente ("dogi", 5, "macho", "perro");
let cat : Paciente = new Paciente ("gaturro", 3, "hembra", "gato");

let cliente : Cliente = new Cliente ("jose", 1555465);
cliente.agregarPaciente(dogi);
cliente.agregarPaciente(cat);
console.log (cliente);
console.log (cliente.sumarVisita());
console.log (cliente.sumarVisita());
