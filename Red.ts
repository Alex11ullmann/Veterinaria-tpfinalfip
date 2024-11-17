import { Sucursal } from "./Sucursal";
import fs from 'node:fs';

export class Red {
    protected sucursal: Sucursal[]

    constructor() {
        this.sucursal = [];
    }
    //getters del arrays
    public getListaSucursales(): Sucursal[] {
        const listaSucursal: string = fs.readFileSync('./archivo.txt', 'utf8');

        const sucursales = listaSucursal.split('\n').map(linea => {
            try {
                return JSON.parse(linea);  // Parsear cada línea como un objeto JSON
            } catch (error) {
                return null;  // Si hay un error, devolver null
            }
        }).filter(item => item !== null);  // Filtrar los null (errores de parseo)
        console.table(sucursales);
        return this.sucursal
    }
    // agregar y eliminar
    public agregarSucursal(sucursalNueva: Sucursal): string {
        const iSucursal = this.sucursal.includes(sucursalNueva);
        if (iSucursal) {
            return `La sucursal ${sucursalNueva.nombreSucursal} ya existe`;
        } else {
            this.sucursal.push(sucursalNueva);
            return `La sucursal ${sucursalNueva.nombreSucursal} fue creada`;
        }
    }
    public eliminarSucursal(idSucEliminar: string): void {
        for (let i = 0; i < this.sucursal.length; i++) {
            if (this.sucursal[i].getId() === idSucEliminar) {
                this.sucursal.splice(i, 1);
                console.log('\x1b[33m%s\x1b[0m', `La Sucursal ha sido Eliminada con exito`);
            } else {
                console.log('\x1b[33m%s\x1b[0m', `El nombre y el ID no coinciden con una sucursal existente`);
            }
        }
    }
        /*public eliminarSucursal(idSucEliminar: string): void {
            if (this.sucursal.includes(idSucEliminar)) {
                const sucursalAEliminar = this.sucursal.find(sucursal => sucursal.getId() === idSucEliminar);
                this.sucursal.splice(this.sucursal.indexOf(sucursalAEliminar), 1);
            
                
            }
        }*/

       /* public eliminarSucursal(idSucEliminar: string): void {  
            if (idSucEliminar != undefined && this.sucursal.includes(idSucEliminar)) {
                const posSucursalAEliminar: number = this.sucursal.indexOf(idSucEliminar);
                this.sucursal.slice(posSucursalAEliminar,1)
                
            }
        }*/

}