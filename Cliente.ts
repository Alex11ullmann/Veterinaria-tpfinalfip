import { Sucursal } from "./Sucursal";
import { Red } from "./Red";
import { Paciente } from "./Paciente";

export abstract class Cliente {
    protected nombreCliente : string;
    protected telefonoCliente : number;
    protected visitas : number = 0;
    protected vip : boolean = false;
    protected idCliente : string;
    protected paciente : Paciente[];

    constructor (nombreCliente : string, telefonoCliente : number, idCliente : string) {
        this.nombreCliente = nombreCliente;
        this.telefonoCliente = telefonoCliente;
        this.idCliente = idCliente;
    }

    public agregarPaciente (paciente : Paciente) {
        const i = this.paciente.includes(paciente);
        if (i) {
            console.log ("Este paciente ya existe");
        } else {
            this.paciente.push (paciente);
        }
    }

    public eliminarPaciente (pacienteAEliminar : Paciente) :void {
        if (pacienteAEliminar != undefined && this.paciente.includes(pacienteAEliminar)) {
            const iPaciente : number = this.paciente.indexOf (pacienteAEliminar);
            this.paciente.slice (iPaciente, 1);
        } else {
            console.log ("El paciente NO existe");
        }
    }
    
    public setPaciente (paciente : Paciente []) : void {
        this.paciente = paciente;
    }

    public getPaciente () : Paciente [] {
        return this.paciente;
    }
}