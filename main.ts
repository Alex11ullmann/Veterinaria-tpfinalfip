import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { guardarArchivos } from "./guardarArchivos";
import { Proveedor } from "./Proveedor";
import { Red } from "./Red";
import { Sucursal } from "./Sucursal";
import * as rls from "readline-sync";

let redVeterinarias : Red = new Red ();
let opcionNumerica : number;
let finalPrograma : boolean = false;

//Comienza interface con usuario

console.log ("|------------------------------------------------------------|");
console.log ("|BIENVENIDOS A LA RED DE VETERRINARIAS ´´FELICES LOS PICHOS´´|");
console.log ("|------------------------------------------------------------|");
///////////////////////////////////////////////////////////////////////////////////////////////////////
//opciones
do{
    let finalDelMenu : boolean = false;
    let finSucursal : boolean = false;
    do {
        console.log ("Ingrese una opcion para continuar:");
        console.log ("1- Para ir a Sucursales de Veterinarias");
        console.log ("2- Para ir a Proveedores");
        console.log ("3- Para ir a Clientes");
        console.log ("0- Para Salir del Sistema");
        opcionNumerica = rls.questionInt ("Elija su opcion: ");
        console.clear();
        if (opcionNumerica < 0 || opcionNumerica > 3) {
            console.log ('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
        } else {
            finalDelMenu = true;
        }
    }while (finalDelMenu == false);

    //SUCURSALES
///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 1) {
        let opcionNumericaSuc : number;
        do {
            //Opciones SUCURSALES
            //---------------------------------------------------------------------------------------------
            let salidaSuc : boolean = false;
            do {
                console.log ("Ingresaste a SUCURSALES, preciona una opcion para continuar:");
                console.log ("1- Para Crear una Sucursal Nueva de Veterinaria");
                console.log ("2- Para Ver una lista de Sucursales de Veterinarias");
                console.log ("3- Para Eliminar una Sucursal de Veterinaria");
                console.log ("4- Para Modificar una Sucursal Existente");
                console.log ("0- Para Volver");
                opcionNumericaSuc = rls.questionInt ("Elija su opcion: ");
                console.clear();
                if (opcionNumericaSuc < 0 || opcionNumericaSuc > 4) {
                    console.log ('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
                } else {
                    salidaSuc = true;
                }
            } while (salidaSuc == false);
            if (opcionNumericaSuc == 1) {
                //se crea el nombre de la sucursal
                console.log ('\x1b[33m%s\x1b[0m', "Eligio la opcion 1- Crear una sucursal Nueva");
                let nombreSucNueva : string = rls.question ("Ingrese el nombre de la nueva sucursal (minimo 5 caracteres): ");
                do {
                    if (nombreSucNueva.length < 5) {
                        console.log ("Ingresaste un nombre con menos de 5 caracteres");
                        nombreSucNueva = rls.question ("Ingrese nuevamente el nombre de la sucursal (Recuerde minimo 5 caracteres): ");
                    }
                } while (nombreSucNueva.length < 5);
                //se crea la direccion de la sucursal
                let direccionSucNueva : string = rls.question ("Ingrese la direccion de la nueva sucursal (minimo 5 caracteres): ");
                do {
                    if (direccionSucNueva.length < 5) {
                        console.log ("Ingresaste un nombre con menos de 5 caracteres");
                        direccionSucNueva = rls.question ("Ingrese nuevamente el nombre de la sucursal (Recuerde minimo 5 caracteres): ");
                    }
                } while (direccionSucNueva.length < 5);
                let sucursalNueva : Sucursal = new Sucursal (nombreSucNueva, direccionSucNueva);
                //se pushea la nueva sucursal a la red
                redVeterinarias.agregarSucursal(sucursalNueva);
                //se convierte el objeto sucursal en una cadena de string
                let sucursalTexto = JSON.stringify(sucursalNueva);
                //se guarda mediante la funcion guardarArchivos el txt
                guardarArchivos (sucursalTexto); 
                console.clear();
                console.log ('\x1b[33m%s\x1b[0m', `La Sucursal ha sido creada con exito!`);
            }
        //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 2) { 
                console.clear();
                console.log ('\x1b[33m%s\x1b[0m', "Eligio la opcion 2- Ver una lista de Sucursales de Veterinarias");
                //se muestra la lista de sucursales de veterinarias existentes
                console.table(redVeterinarias.getListaSucursales());
            }
        //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 3) {
                console.clear();
                console.log ('\x1b[33m%s\x1b[0m', "Eligio la opcion 3- Eliminar una sucursal");
                let eliminarSucNombre = rls.question ("Ingrese el nombre de la sucursal a Eliminar: ");
                let eliminarSucId = rls.question ("Ingrese el ID de la sucursal a Eliminar: ");
                console.clear();
                redVeterinarias.eliminarSucursal(eliminarSucNombre, eliminarSucId);
            }
        //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 4) {
                let modificarNombreSuc = rls.question ("Ingrese el nombre de la sucursal a modificar: ");
            }
        //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 0) {
                console.clear();
                console.log ('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido de Sucursales`);
                finSucursal = true;
            }
        } while (finSucursal == false);
    } //if
    //PROVEEDORES
///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 2) {
        let opcionNumericaProv : number;
        let finProveedor : boolean = false;
        do {
            let salidaProv : boolean = false;
            do{
                console.log ("Ingresaste a PROVEEDORES, preciona una opcion para continuar:");
                console.log ("1- Para Crear a un Proveedor Nuevo");
                console.log ("2- Para Ver una lista de Proveedores");
                console.log ("3- Para Eliminar a un Proveedor");
                console.log ("0- Para Volver");
                opcionNumericaProv = rls.questionInt ("Elija su opcion: ");
                console.clear();
                if (opcionNumericaProv < 0 || opcionNumericaProv > 3) {
                    console.log ('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
                } else {
                    salidaProv = true;
                }
            } while (salidaProv == false);
            if (opcionNumericaProv == 1) {
                //se crea el nombre del proveedor
                console.log ('\x1b[33m%s\x1b[0m', "Eligio la opcion 1- Crear a un Proveedor Nuevo");
                let nombreProveedor : string = rls.question ("Ingrese el nombre del nuevo Proveedor (minimo 5 caracteres): ");
                do {
                    if (nombreProveedor.length < 5) {
                        console.log ("Ingresaste un nombre con menos de 5 caracteres");
                        nombreProveedor = rls.question ("Ingrese nuevamente el nombre del Proveedor (Recuerde minimo 5 caracteres): ");
                    }
                } while (nombreProveedor.length < 5);
                //se crea el telefono del Proveedor
                let telefonoProveedor : number = rls.questionInt ("Ingrese el telefono del Proveedor (minimo 9 numeros - Ejemplo: 011905040): ");
                do {
                    if (telefonoProveedor < 9) {
                        console.log ("Ingresaste un telefono con menos de 9 numeros");
                        telefonoProveedor = rls.questionInt ("Ingrese nuevamente el telefono del Proveedor (Recuerde minimo 9 numeros - Ejemplo: 011905040): ");
                    }
                } while (telefonoProveedor < 9);
                let proveedorNuevo : Proveedor = new Proveedor (nombreProveedor, telefonoProveedor);
                //se pushea la nueva sucursal a la red
                console.log ("Ingrese a que Sucursal desea agregarlo: ");
                


                console.clear();
                console.log ('\x1b[33m%s\x1b[0m', `El proveedor ha sido creada con exito!`);
            }
            if (opcionNumericaProv == 2) {
                console.clear();
                console.log ('\x1b[33m%s\x1b[0m', "Eligio la opcion 2- Ver una lista de Proveedores");
                //se muestra la lista de proveedores existentes
                
            }
            if (opcionNumericaProv == 0) {
                console.clear();
                console.log ('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido de Proveedores`);
                finProveedor = true;
            }
        } while (finProveedor == false);

    } //if
    
    //FIN DEL SISTEMA
///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 0) {
        console.clear();
        console.log ('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido del Sistema`);
        finalPrograma = true;
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////
} while (finalPrograma == false);
