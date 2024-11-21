import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
import { Generador } from "./generarid";
import fs from 'node:fs';
import * as rls from "readline-sync";


export class Sucursal {
    public nombreSucursal : string;
    public direccion : string;
    public id : string;
    
    public cliente : Cliente[];
    public proveedores : Proveedor[];
    
    constructor(nombreSucursal: string, direccion: string, proveedores: Proveedor[] = [], id?: string) {
        this.nombreSucursal = nombreSucursal;
        this.direccion = direccion;
        this.cliente = [];
        this.proveedores = proveedores;
        if (id){
            this.id = id
        } else {
            this.id = this.generarId()};
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
    public transformarProveedor (){

    }
    public agregarProveedor(proveedorNuevo: Proveedor): string {
        const iExiste = this.proveedores.includes(proveedorNuevo);
        if (iExiste) {
            return `'\x1b[33m%s\x1b[0m', El proveedor ${proveedorNuevo.nombreProveedor} ya existe`;
        } else {
            this.proveedores.push(proveedorNuevo);
            return `'\x1b[33m%s\x1b[0m', El proveedor ${proveedorNuevo.nombreProveedor} fue creado`;
        }
    }
        static fromJSON(obj: any): Sucursal {
            return new Sucursal(obj.nombreSucursal, obj.direccion, obj.proveedores || [], obj.id);
        }
/*
            const existe = this.proveedor.some((proveedor) => proveedor.nombreProveedor === proveedorNuevo.nombreProveedor &&
            proveedor.telefonoProveedor === proveedorNuevo.telefonoProveedor);
            if (existe) {
                console.log ('\x1b[33m%s\x1b[0m', "No es posible crear este proveedor, ya que existe otro con los mismos datos");
            } else { 
                this.proveedor.push(proveedorNuevo);
                console.log ('\x1b[33m%s\x1b[0m', "El nuevo Proveedor fue creado");
            }*/
    
    
    public eliminarProveedor(proveedorAEliminar : Proveedor) : string {
        if (proveedorAEliminar != undefined && this.proveedores.includes(proveedorAEliminar)) {
            const iProveedor : number = this.proveedores.indexOf (proveedorAEliminar);
            this.proveedores.splice (iProveedor, 1);
            return `El proveedor ${proveedorAEliminar.nombreProveedor} fue eliminado`;
        } else {
            return `El proveedor ${proveedorAEliminar.nombreProveedor} NO existe`;
        }
    }
    //getters de los arrays
    public getListaProveedores():Proveedor[]{
        return this.proveedores;
    }
    public getListaClientes():Cliente[]{
        return this.cliente;
    }
}