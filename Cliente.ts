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
    public modificarNombrePaciente (pacienteAModificar : Paciente, nombrePaciente:string, edad:number, genero:string, especie:string, nuevoNombre:string) : void{
        const ipaciente = this.paciente.find((pacienteAModificar) =>
            pacienteAModificar.nombrePaciente === nombrePaciente &&
            pacienteAModificar.edad === edad &&
            pacienteAModificar.genero === genero &&
            pacienteAModificar.especie === especie
        );
        if (ipaciente) {
            pacienteAModificar.setNombrePaciente (nuevoNombre);
            console.log ("El nombre fue modificado");
        } else {
            console.log ("No se encontro ningun registro con esos datos");
        }
    }

    public modificarNombrePaciente2 (pacienteAModificar : Paciente, nombrePaciente:string, edad:number, genero:string, especie:string, nuevoNombre:string, nuevaEdad:number, nuevoGenero:string, nuevaEspecie:string) : void{
        const ipaciente = this.paciente.find((pacienteAModificar) =>
            pacienteAModificar.nombrePaciente === nombrePaciente &&
            pacienteAModificar.edad === edad &&
            pacienteAModificar.genero === genero &&
            pacienteAModificar.especie === especie
        );
        pacienteAModificar.setNombrePaciente (nuevoNombre);
        if (ipaciente) {
            this.modificarNombrePaciente2(pacienteAModificar,nombrePaciente, edad, genero, especie, nuevoNombre, nuevaEdad, nuevoGenero, nuevaEspecie);
            console.log ("El nombre fue modificado");
        } else {console.log ("No se encontro ningun registro con esos datos");}
        pacienteAModificar.setEdad (nuevaEdad);
        pacienteAModificar.setGenero (nuevoGenero);
        pacienteAModificar.setEspecie (nuevaEspecie);
    }
    public eliminarPaciente (pacienteAEliminar : Paciente) :void {
        if (pacienteAEliminar != undefined && this.paciente.includes(pacienteAEliminar)) {
            const iPaciente : number = this.paciente.indexOf (pacienteAEliminar);
            this.paciente.slice (iPaciente, 1);
        } else {
            console.log ("El paciente NO existe");
        }
    }
   
    public getPaciente () : Paciente [] {
        return this.paciente;
    }
}