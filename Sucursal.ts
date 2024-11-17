import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
import { Generador } from "./generarid";

export class Sucursal {
    public nombreSucursal : string;
    public direccion : string;
    protected id : string;
    
    public cliente : Cliente[];
    public proveedor : Proveedor[];
    
    constructor(nombreSucursal: string, direccion: string) {
        this.nombreSucursal = nombreSucursal;
        this.direccion = direccion;
        this.cliente = [];
        this.proveedor = [];
        this.id = this.generarId();
    }
    //getters y setters de la clase
    public getNombreSucursal(): string {
        return this.nombreSucursal;
    }
    public setNombreSucursal(nombreSucursal: string): void {
        this.nombreSucursal = nombreSucursal;
    }
    public getDireccion(): string {
        return this.direccion;
    }
    public setDireccion(direccion: string) : void {
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
    // agregar y eliminar
    public agregarCliente (clienteNuevo : Cliente) :string {
        const iCliente = this.cliente.includes(clienteNuevo);
        if (iCliente) {
            return (`El cliente ${clienteNuevo.nombreCliente} ya existe`);
        } else {
            this.cliente.push (clienteNuevo);
            return `El cliente ${clienteNuevo.nombreCliente} fue creado`;
        }
    } 
    public eliminarCliente (clienteAEliminar : Cliente) : string {
        if (clienteAEliminar != undefined && this.cliente.includes (clienteAEliminar)) {
            const iCliente : number = this.cliente.indexOf (clienteAEliminar);
            this.cliente.splice (iCliente, 1);
            return `El cliente ${clienteAEliminar.nombreCliente} fue eliminado`;
        } else {
            return `El cliente ${clienteAEliminar.nombreCliente} NO existe`;
        }
    }
    public agregarProveedor (proveedorNuevo : Proveedor) :string {
        const i = this.proveedor.includes(proveedorNuevo);
        if (i) {
           return `El proveedor ${proveedorNuevo.nombreProveedor} ya existe`;
        } else {
            this.proveedor.push (proveedorNuevo);
            return `El proveedor ${proveedorNuevo.nombreProveedor} fue creado`;
        }
    } 
    public eliminarProveedor(proveedorAEliminar : Proveedor) : string {
        if (proveedorAEliminar != undefined && this.proveedor.includes(proveedorAEliminar)) {
            const iProveedor : number = this.proveedor.indexOf (proveedorAEliminar);
            this.proveedor.splice (iProveedor, 1);
            return `El proveedor ${proveedorAEliminar.nombreProveedor} fue eliminado`;
        } else {
            return `El proveedor ${proveedorAEliminar.nombreProveedor} NO existe`;
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