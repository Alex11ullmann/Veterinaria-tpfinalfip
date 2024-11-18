import { log } from "node:console";
import { Sucursal } from "./Sucursal";
import fs from 'node:fs';
import * as rls from "readline-sync";

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
    //Eliminar Sucursal
    public eliminarSucursal(idSucEliminar: string): void {
        const listaSucursal: string = fs.readFileSync('./archivo.txt', 'utf8');
        const sucursales = listaSucursal.split('\n').map(linea => {
            try {
                return JSON.parse(linea);  // Parsear cada línea como un objeto JSON
            } catch (error) {
                return null;  // Si hay un error, devolver null
            }
        }).filter(item => item !== null);
        const indice = sucursales.findIndex(suc => suc.id === idSucEliminar);
        if (indice !== -1) {
            sucursales.splice(indice, 1);
            let sucursalTexto = sucursales.map(suc => JSON.stringify(suc)).join('\n');
            // Guardar el archivo actualizado
            fs.writeFileSync('./archivo.txt', sucursalTexto, 'utf8');
            console.log('\x1b[33m%s\x1b[0m', `La sucursal con ID ${idSucEliminar} fue eliminada con éxito.`);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `No se encontró ninguna sucursal con el ID ${idSucEliminar}.`);
        }
    }

    public modificarSucursal(): void {
        let salida: boolean = false

        let idSucAModificar = rls.question("Ingrese el ID de la sucursal que desea modificar: ")
        const listaSucursal: string = fs.readFileSync('./archivo.txt', 'utf8');
        const sucursales = listaSucursal.split('\n').map(linea => {
            try {
                return JSON.parse(linea);  // Parsear cada línea como un objeto JSON
            } catch (error) {
                return null;  // Si hay un error, devolver null
            }
        }).filter(item => item !== null);
        const indice = sucursales.findIndex(suc => suc.id === idSucAModificar);

        if (indice !== -1) {
            do {
                let respuesta = rls.questionInt("Ingrese 1 para cambiar el nombre y 2 para cambiar la dirección o 0 para volver: ")
                if (respuesta == 1) {
                    let nombreNuevo = rls.question("Ingrese el nuevo nombre de la sucursal: ")
                    do {
                        if (nombreNuevo.length < 5) {
                            console.log ("Ingresaste un nombre con menos de 5 caracteres");
                            nombreNuevo = rls.question ("Ingrese nuevamente el nombre de la sucursal (Recuerde minimo 5 caracteres): ");
                        }
                    } while (nombreNuevo.length < 5);
                    sucursales[indice].nombreSucursal = nombreNuevo;
                    let sucursalTexto = sucursales.map(suc => JSON.stringify(suc)).join('\n');
                    // Guardar el archivo actualizado
                    fs.writeFileSync('./archivo.txt', sucursalTexto, 'utf8');
                    console.log('\x1b[33m%s\x1b[0m', `La sucursal con ID ${idSucAModificar} fue modificada con éxito.`);
                } if (respuesta == 2) {
                    let direccionNueva = rls.question("Ingrese la nueva dirección de la sucursal: ")
                    do {
                        if (direccionNueva.length < 5) {
                            console.log ("Ingresaste un nombre con menos de 5 caracteres");
                            direccionNueva = rls.question ("Ingrese nuevamente el nombre de la sucursal (Recuerde minimo 5 caracteres): ");
                        }
                    } while (direccionNueva.length < 5);
                    sucursales[indice].direccion = direccionNueva;
                    let sucursalTexto = sucursales.map(suc => JSON.stringify(suc)).join('\n');
                    // Guardar el archivo actualizado
                    fs.writeFileSync('./archivo.txt', sucursalTexto, 'utf8');
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