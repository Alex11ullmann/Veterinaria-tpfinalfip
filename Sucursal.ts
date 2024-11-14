import { Red } from "./Red";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";

export class Sucursal {
    public nombreSucursal:string;
    public direccion:string;
    public id:string;
    
    private cliente:Cliente[];
    private proveedor:Proveedor[];
    
    constructor(nombreSucursal:string,  direccion:string, id:string, cliente:Cliente[], proveedor:Proveedor[]) {
        this.nombreSucursal=nombreSucursal;
        this.direccion=direccion;
        this.id=id;
        this.cliente=cliente;
        this.proveedor=proveedor;
    }

    public getNombreSucursal(): string {
        return this.nombreSucursal;
    }
    public setNombreSucursal(nombreSucursal: string): void {
        this.nombreSucursal = nombreSucursal;
    }
    public getDireccion(): string {
        return this.direccion;
    }
    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
    public getId(): string {
        return this.id;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public getCliente():Cliente[]{
        return this.cliente;
    }
    public getProveedor():Proveedor[]{
        return this.proveedor;
    }
    public setCliente(cliente:Cliente[]):void{
        this.cliente=cliente;
    }
    public setProveedor(proveedor:Proveedor[]):void{
        this.proveedor=proveedor;
    }
    //Funciones

    public agregarCliente (cliente:Cliente[]){
        this.cliente.push();

    } 
    public eliminarCliente(cliente:Cliente[]){
        this.cliente.pop();
    }

    public agregarProveedor (proveedor:Proveedor[]){
        this.proveedor.push();

    } 
    public eliminarProveedor(proveedor:Proveedor[]){
        this.proveedor.pop();
    }




    //FALTA AGREGAR VALIDACIONES



}