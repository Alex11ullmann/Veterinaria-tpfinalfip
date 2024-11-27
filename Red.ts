import { Sucursal } from "./sucursal";
import * as rls from "readline-sync";

export class Red {
    protected sucursal: Sucursal[]

    constructor() {
        this.sucursal = [];
    }
    //getters del arrays
    public getListaSucursales(): Sucursal[] {
        return this.sucursal;
    }
    //eliminar Sucursal
    public agregarSucursal(sucursalNueva: Sucursal): string {
        const iSucursal = this.sucursal.includes(sucursalNueva);
        if (iSucursal) {
            return `La sucursal ${sucursalNueva.nombreSucursal} ya existe`;
        } else {
            this.sucursal.push(sucursalNueva);
            return `La sucursal ${sucursalNueva.nombreSucursal} fue creada`;
        }
    }
    //Eliminar Sucursal
    public eliminarSucursal(idSucEliminar: string): void {
        const indice = this.sucursal.findIndex(suc => suc.id === idSucEliminar);
        if (indice !== -1) {
            this.sucursal.splice(indice, 1);
            console.log('\x1b[33m%s\x1b[0m', `La sucursal con ID ${idSucEliminar} fue eliminada con éxito.`);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `No se encontró ninguna sucursal con el ID ${idSucEliminar}.`);
        }
    }
    //Modificar Sucursal
    public modificarSucursal(): void {
        let salida: boolean = false
        let idSucAModificar = rls.question("Ingrese el ID de la sucursal que desea modificar: ")
        const indice = this.sucursal.findIndex(suc => suc.id === idSucAModificar);
        if (indice !== -1) {
            do {
                let respuesta = rls.questionInt("Ingrese 1 para cambiar el nombre, 2 para cambiar la direccion o 0 para volver: ")
                if (respuesta == 1) {
                    let nombreNuevo = rls.question("Ingrese el nuevo nombre de la sucursal: ")
                    do {
                        if (nombreNuevo.length < 5) {
                            console.log ("Ingresaste un nombre con menos de 5 caracteres");
                            nombreNuevo = rls.question ("Ingrese nuevamente el nombre de la sucursal (Recuerde minimo 5 caracteres): ");
                        }
                    } while (nombreNuevo.length < 5);
                    this.sucursal[indice].nombreSucursal = nombreNuevo;
                    console.log('\x1b[33m%s\x1b[0m', `La sucursal con ID ${idSucAModificar} fue modificada con éxito.`);
                } if (respuesta == 2) {
                    let direccionNueva = rls.question("Ingrese la nueva dirección de la sucursal: ")
                    do {
                        if (direccionNueva.length < 5) {
                            console.log ("Ingresaste una direccion con menos de 5 caracteres");
                            direccionNueva = rls.question ("Ingrese nuevamente la direccion de la sucursal (Recuerde minimo 5 caracteres): ");
                        }
                    } while (direccionNueva.length < 5);
                    this.sucursal[indice].direccion = direccionNueva;
                    console.log('\x1b[33m%s\x1b[0m', `La sucursal con ID ${idSucAModificar} fue modificada con éxito.`);
                } if (respuesta == 0) {
                    salida = true;
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has vuelto al menu anterior`);
                } if (respuesta < 0 || respuesta > 2) {
                    console.log('\x1b[31m%s\x1b[0m', `Ingresaste un valor incorrecto, vuelva a ingresar`);
                }
            } while (salida == false);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `No se encontró ninguna sucursal con el ID ${idSucAModificar}.`)
        }
    }
}