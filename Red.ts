import { Sucursal } from "./Sucursal";

export class Red {
    protected sucursal : Sucursal[]

    constructor() {
        this.sucursal = [];
    }
    //getters del arrays
    public getListaSucursales () : Sucursal[] {
        return this.sucursal;
    }
    // agregar y eliminar
    public agregarSucursal (sucursalNueva : Sucursal) :string {
        const iSucursal = this.sucursal.includes(sucursalNueva);
        if (iSucursal) {
            return `La sucursal ${sucursalNueva.nombreSucursal} ya existe`;
        } else {
            this.sucursal.push (sucursalNueva);
            return `La sucursal ${sucursalNueva.nombreSucursal} fue creada`;
        }
    } 
    public eliminarSucursal (nombreSucEliminar : string, idSucEliminar : string) : void {
        for (let i = 0; i < this.sucursal.length; i++) {
            if (this.sucursal[i].getNombreSucursal() === nombreSucEliminar && 
                this.sucursal[i].getId() === idSucEliminar) {
                    this.sucursal.splice (i, 1);
                    console.log ('\x1b[33m%s\x1b[0m', `La Sucursal ha sido Eliminada con exito`);
                } else {
                    console.log ('\x1b[33m%s\x1b[0m', `El nombre y el ID no coinciden con una sucursal existente`);
                }
        }
    }
}