import { Red } from "./Red";

export class Sucursal {
    private nombreSucursal:string;
    private direccion:string;
    private id:string;
    private cliente:Cliente[];
    private proveedor:Proveedor[];
    constructor(nombreSucursal:string,  direccion:string, id:string, cliente:Cliente[], proveedor:Proveedor[]) {
        this.nombreSucursal=nombreSucursal;
        this.direccion=direccion;
        this.id=id;
        this.cliente=cliente;
        this.proveedor=proveedor;
    }

    //Getters
    public getCliente():Cliente[]{
        return this.cliente;
    }

    public getProveedor():Proveedor[]{
        return this.proveedor;
    }

    //Setters

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