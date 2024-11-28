import { Cliente } from "./cliente";
import { Generador } from "./generarid";
import * as rls from "readline-sync";
import { Proveedor } from "./Proveedor";

export class Sucursal {
    public nombreSucursal : string;
    public direccion : string;
    public id : string;
    protected cliente : Cliente[];
    protected proveedor : Proveedor[];
    
    constructor(nombreSucursal: string, direccion: string) {
        this.nombreSucursal = nombreSucursal;
        this.direccion = direccion;
        this.cliente = [];
        this.proveedor = [];
        this.id = this.generarId();
    }
    //getters y setters de la clase                   
    private getNombreSucursal(): string {
        return this.nombreSucursal;
    }
    private setNombreSucursal(nombreSucursal: string): void {
        this.nombreSucursal = nombreSucursal;
    }
    private getDireccion(): string {
        return this.direccion;
    }
    private setDireccion(direccion: string) : void {
        this.direccion = direccion;
    }
    //getters y setters del generador de id
    public getId(): string {
        return this.id;
    }
    //generador id
    private generarId(): string {
        let idGenerado : Generador = new Generador();
        let id = "S/" + idGenerado.generadorId().toString();
        return id;
    }
    // agregar, eliminar y modificar clientes
    public agregarCliente (clienteNuevo : Cliente) :string {
        const iExiste = this.cliente.includes(clienteNuevo);
        if (iExiste) {
            return (`El cliente ${clienteNuevo.nombreCliente} ya existe`);
        } else {
            this.cliente.push (clienteNuevo);
            return `El cliente ${clienteNuevo.nombreCliente} fue creado`;
        }
    } 
    public eliminarCliente (cliIdAEliminar : number) : void {
        const indice = this.cliente.findIndex(suc => suc.getId() === cliIdAEliminar);
        if (indice !== -1) {
            this.cliente.splice(indice, 1);
            console.log('\x1b[33m%s\x1b[0m', `El cliente con ID ${cliIdAEliminar} fue eliminado con exito.`);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `No se encontro ningun cliente con el ID ${cliIdAEliminar}.`);
        }
    }
    public modificarCliente(cliIdAModificar : number): void {
        let salida: boolean = false;
        const indice = this.cliente.findIndex(suc => suc.getId() === cliIdAModificar);
        if (indice == -1) {
            console.log('\x1b[33m%s\x1b[0m', `El Cliente con ID ${cliIdAModificar} no existe`);
        } else {
            do {
                let respuesta = rls.questionInt("Ingrese 1 para cambiar el nombre, 2 para cambiar el telefono o 0 para volver: ");
                if (respuesta == 1) {
                    let nombreNuevo = rls.question("Ingrese el nuevo nombre del Cliente: ");
                    do {
                        if (nombreNuevo.length < 5) {
                            console.log ("Ingresaste un nombre con menos de 5 caracteres");
                            nombreNuevo = rls.question ("Ingrese nuevamente el nombre del Cliente (Recuerde minimo 5 caracteres): ");
                        }
                    } while (nombreNuevo.length < 5);
                    this.cliente[indice].nombreCliente = nombreNuevo;
                    console.log('\x1b[33m%s\x1b[0m', `El Cliente con ID ${cliIdAModificar} fue modificado con éxito.`);
                } if (respuesta == 2) {
                    let telefonoNuevo = rls.questionInt ("Ingrese el nuevo telefono del Cliente: ");
                    do {
                        if (telefonoNuevo < 5) {
                            console.log ("Ingresaste un telefono con menos de 5 caracteres");
                            telefonoNuevo = rls.questionInt ("Ingrese nuevamente el telefono del Cliente (Recuerde minimo 5 caracteres): ");
                        }
                    } while (telefonoNuevo < 5);
                    this.cliente[indice].telefonoCliente = telefonoNuevo;
                    console.log('\x1b[33m%s\x1b[0m', `El Cliente con ID ${cliIdAModificar} fue modificado con éxito.`);
                } if (respuesta == 0) {
                    salida = true;
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has vuelto al menu anterior`);
                } if (respuesta < 0 || respuesta > 2) {
                    console.log('\x1b[31m%s\x1b[0m', `Ingresaste un valor incorrecto, vuelva a ingresar`);
                }
            } while (salida == false);
        }
    }
    // agregar, eliminar y modificar proveedores
    public agregarProveedor(proveedorNuevo: Proveedor): string {
        const iExiste = this.proveedor.includes(proveedorNuevo);
        if (iExiste) {
            return `'\x1b[33m%s\x1b[0m', El proveedor ${proveedorNuevo.nombreProveedor} ya existe`;
        } else {
            this.proveedor.push(proveedorNuevo);
            return `'\x1b[33m%s\x1b[0m', El proveedor ${proveedorNuevo.nombreProveedor} fue creado`;
        }
    }
    public eliminarProveedor(provIdAEliminar : string) : void {
        const indice = this.proveedor.findIndex(suc => suc.getId() === provIdAEliminar);
        if (indice !== -1) {
            this.proveedor.splice(indice, 1);
            console.log('\x1b[33m%s\x1b[0m', `El proveedor con ID ${provIdAEliminar} fue eliminado con exito.`);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `No se encontro ningun proveedor con el ID ${provIdAEliminar}.`);
        }
    }
    public modificarProveedor(provIdAModificar : string): void {
        let salida: boolean = false;
        const indice = this.proveedor.findIndex(suc => suc.getId() === provIdAModificar);
        if (indice == -1) {
            console.log('\x1b[33m%s\x1b[0m', `El proveedor con ID ${provIdAModificar} no existe`);
        } else {
            do {
                let respuesta = rls.questionInt("Ingrese 1 para cambiar el nombre, 2 para cambiar el telefono o 0 para volver: ");
                if (respuesta == 1) {
                    let nombreNuevo = rls.question("Ingrese el nuevo nombre del proveedor: ");
                    do {
                        if (nombreNuevo.length < 5) {
                            console.log ("Ingresaste un nombre con menos de 5 caracteres");
                            nombreNuevo = rls.question ("Ingrese nuevamente el nombre del proveedor (Recuerde minimo 5 caracteres): ");
                        }
                    } while (nombreNuevo.length < 5);
                    this.proveedor[indice].nombreProveedor = nombreNuevo;
                    console.log('\x1b[33m%s\x1b[0m', `El proveedor con ID ${provIdAModificar} fue modificado con éxito.`);
                } if (respuesta == 2) {
                    let telefonoNuevo = rls.questionInt ("Ingrese el nuevo telefono del proveedor: ");
                    do {
                        if (telefonoNuevo < 5) {
                            console.log ("Ingresaste un telefono con menos de 5 caracteres");
                            telefonoNuevo = rls.questionInt ("Ingrese nuevamente el telefono del proveedor (Recuerde minimo 5 caracteres): ");
                        }
                    } while (telefonoNuevo < 5);
                    this.proveedor[indice].telefonoProveedor = telefonoNuevo;
                    console.log('\x1b[33m%s\x1b[0m', `El proveedor con ID ${provIdAModificar} fue modificado con éxito.`);
                } if (respuesta == 0) {
                    salida = true;
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has vuelto al menu anterior`);
                } if (respuesta < 0 || respuesta > 2) {
                    console.log('\x1b[31m%s\x1b[0m', `Ingresaste un valor incorrecto, vuelva a ingresar`);
                }
            } while (salida == false);
        }
    }
    //getters de los arrays
    public getListaProveedores():Proveedor[]{
        return this.proveedor;
    }
    public getListaClientes():Cliente[]{
        return this.cliente;
    }
}