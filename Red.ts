import { Sucursal } from "./Sucursal";

export class Red {
    protected sucursal:Sucursal[]

    constructor(sucursal:Sucursal[]) {
        this.sucursal = sucursal;  
    }

    public getSucursal():Sucursal[]{
        return this.sucursal;
    }
    
    public setSucursal (sucursalAModificar : Sucursal, nombreSucursal:string, direccion:string, id:string, nuevoNombre : string, nuevaDireccion : string, nuevoId : string) : void{
        const isucursal = this.sucursal.find((sucursalAModificar) =>
            sucursalAModificar.nombreSucursal === nombreSucursal &&
            sucursalAModificar.direccion === direccion &&
            sucursalAModificar.id === id
        );
        sucursalAModificar.setNombreSucursal (nuevoNombre);
        sucursalAModificar.setDireccion (nuevaDireccion);
        sucursalAModificar.setId (nuevoId);
    }

    public agregarSucursal(sucursalNueva : Sucursal){
        this.sucursal.push(sucursalNueva);
    }

    public eliminarSucursal(sucursal : Sucursal) : void {
        const isucursal : number = this.sucursal.indexOf (sucursal);
        this.sucursal.slice (isucursal, 1); 
    }

}