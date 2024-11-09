import { Sucursal } from "./Sucursal";
import { Red } from "./Red";

export class Cliente {
    protected nombre : string;
    protected telefono : number;
    protected visitas : number = 0;
    protected vip : boolean = false;
    protected id : string;
    protected paciente : Paciente[];

    constructor (nombre : string, telefono : number, id : string, paciente : Paciente[]) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.paciente = paciente;
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
    
    public setPaciente (paciente : Paciente) : void {
        this.paciente = paciente;
    }

    public getPaciente () : Paciente [] {
        return this.paciente;
    }
}