import { guardarArchivos } from "./guardarArchivos";
import { Proveedor } from "./Proveedor";
import { Sucursal } from "./sucursal";
import * as rls from "readline-sync";
import { Red } from "./Red";
import { Paciente } from "./Paciente";
import { Cliente } from "./cliente";

let redVeterinarias: Red = new Red();
let opcionNumerica: number;
let finalPrograma: boolean = false;

//Comienza interface con usuario

console.log("|-----------------------------------------------------------|");
console.log("|BIENVENIDOS A LA RED DE VETERINARIAS ´´FELICES LOS PICHOS´´|");
console.log("|-----------------------------------------------------------|");
///////////////////////////////////////////////////////////////////////////////////////////////////////
//opciones
do {
    let finalDelMenu: boolean = false;
    let finSucursal: boolean = false;
    do {
        console.log("Ingrese una opcion para continuar:");
        console.log("1- Para ir a Sucursales de Veterinarias");
        console.log("2- Para ir a Proveedores");
        console.log("3- Para ir a Clientes");
        console.log("4- Para ir a Pacientes");
        console.log("0- Para Salir del Sistema");
        opcionNumerica = rls.questionInt("Elija su opcion: ");
        console.clear();
        if (opcionNumerica < 0 || opcionNumerica > 4) {
            console.log('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
        } else {
            finalDelMenu = true;
        }
    } while (finalDelMenu == false);

    //SUCURSALES
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 1) {
        let opcionNumericaSuc: number;
        do {
            //Opciones SUCURSALES
            //---------------------------------------------------------------------------------------------
            let salidaSuc: boolean = false;
            do {
                console.log("Ingresaste a SUCURSALES, presiona una opcion para continuar:");
                console.log("1- Para Crear una Sucursal Nueva de Veterinaria");
                console.log("2- Para Ver una lista de Sucursales de Veterinarias");
                console.log("3- Para Eliminar una Sucursal de Veterinaria");
                console.log("4- Para Modificar una Sucursal Existente");
                console.log("0- Para Volver");
                opcionNumericaSuc = rls.questionInt("Elija su opcion: ");
                console.clear();
                if (opcionNumericaSuc < 0 || opcionNumericaSuc > 4) {
                    console.log('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
                } else {
                    salidaSuc = true;
                }
            } while (salidaSuc == false);
            if (opcionNumericaSuc == 1) {
                //se crea el nombre de la sucursal
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 1- Crear una sucursal Nueva");
                let nombreSucNueva: string = rls.question("Ingrese el nombre de la nueva sucursal (minimo 5 caracteres): ");
                do {
                    if (nombreSucNueva.length < 5) {
                        console.log("Ingresaste un nombre con menos de 5 caracteres");
                        nombreSucNueva = rls.question("Ingrese nuevamente el nombre de la sucursal (Recuerde minimo 5 caracteres): ");
                    }
                } while (nombreSucNueva.length < 5);
                //se crea la direccion de la sucursal
                let direccionSucNueva: string = rls.question("Ingrese la direccion de la nueva sucursal (minimo 5 caracteres): ");
                do {
                    if (direccionSucNueva.length < 5) {
                        console.log("Ingresaste un nombre con menos de 5 caracteres");
                        direccionSucNueva = rls.question("Ingrese nuevamente el nombre de la sucursal (Recuerde minimo 5 caracteres): ");
                    }
                } while (direccionSucNueva.length < 5);
                let sucursalNueva: Sucursal = new Sucursal(nombreSucNueva, direccionSucNueva);
                //se pushea la nueva sucursal a la red
                redVeterinarias.agregarSucursal(sucursalNueva);
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', `La Sucursal ha sido creada con exito!`);
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 2) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 2- Ver una lista de Sucursales de Veterinarias");
                //se muestra la lista de sucursales de veterinarias existentes
                console.table(redVeterinarias.getListaSucursales());
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 3) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 3- Eliminar una sucursal");
                let eliminarSucId = rls.question("Ingrese el ID de la sucursal a Eliminar: ");
                console.clear();
                redVeterinarias.eliminarSucursal(eliminarSucId);
            };
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 4) {
                console.clear()
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 4- Modificar una sucursal");
                redVeterinarias.modificarSucursal();
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaSuc == 0) {
                console.clear();
                console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido de Sucursales`);
                finSucursal = true;
            }
        } while (finSucursal == false);
    } //if
    //PROVEEDORES
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 2) {
        let opcionNumericaProv: number;
        let finProveedor: boolean = false;
        do {
            let salidaProv: boolean = false;
            do {
                console.log("Ingresaste a PROVEEDORES, presiona una opcion para continuar:");
                console.log("1- Para Crear a un Proveedor Nuevo");
                console.log("2- Para Ver una lista de Proveedores");
                console.log("3- Para Eliminar a un Proveedor");
                console.log("4- Para Modificar un Proveedor Existente");
                console.log("0- Para Volver");
                opcionNumericaProv = rls.questionInt("Elija su opcion: ");
                console.clear();
                if (opcionNumericaProv < 0 || opcionNumericaProv > 4) {
                    console.log('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
                } else {
                    salidaProv = true;
                }
            } while (salidaProv == false);
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaProv == 1) {
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 1- Crear a un Proveedor Nuevo");
                let idSucursal = rls.question("Ingrese el ID de la sucursala la que desea agregarle un Proveedor: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === idSucursal);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que buscas, no existe");
                } else {
                    //se crea el nombre del Proveedor
                    let nombreProveedor: string = rls.question("Ingrese el nombre del nuevo Proveedor (minimo 5 caracteres): ");
                    do {
                        if (nombreProveedor.length < 5) {
                            console.log("Ingresaste un nombre con menos de 5 caracteres");
                            nombreProveedor = rls.question("Ingrese nuevamente el nombre del Proveedor (Recuerde minimo 5 caracteres): ");
                        }
                    } while (nombreProveedor.length < 5);
                    //se crea el telefono del Proveedor
                    let telefonoProveedor: number;
                    do {
                        telefonoProveedor = rls.questionInt("Ingrese el telefono del Proveedor (minimo 9 numeros - Ejemplo: 011905040): ");
                        if (telefonoProveedor < 9) {
                            console.log("Ingresaste un telefono con menos de 9 numeros");
                        }
                    } while (telefonoProveedor < 9);
                    let proveedorNuevo: Proveedor = new Proveedor(nombreProveedor, telefonoProveedor);
                    redVeterinarias.getListaSucursales()[indiceSucursal].agregarProveedor(proveedorNuevo);
                    console.clear();
                    console.log('\x1b[33m%s\x1b[0m', `El proveedor ha sido creada con exito!`);
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaProv == 2) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 2- Ver una lista de Proveedores");
                //se muestra la lista de proveedores existentes
                let idSucursal = rls.question("Ingrese el ID de la sucursal que contiene los proveedores que desea mostrar: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === idSucursal);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    console.clear();
                    console.table(redVeterinarias.getListaSucursales()[indiceSucursal].getListaProveedores());
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaProv == 3) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 3- Eliminar a un proveedor");
                let identificarSucId = rls.question("Ingrese el ID de la Sucursal que contiene el proveedor a Eliminar: ");
                console.clear();
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarSucId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    let eliminarProvId = rls.question("Ingrese el ID del Proveedor que desea Eliminar: ");
                    console.clear();
                    const indiceProveedor = redVeterinarias.getListaSucursales()[indiceSucursal].getListaProveedores().findIndex(suc => suc.getId() === eliminarProvId);
                    if (indiceProveedor == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del proveedor que ingresaste, no existe");
                    } else {
                        console.clear();
                        redVeterinarias.getListaSucursales()[indiceSucursal].eliminarProveedor(eliminarProvId);
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaProv == 4) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 4- Modificar un proveedor");
                let identificarSucId = rls.question("Ingrese el ID de la Sucursal que contiene el proveedor a modificar: ");
                console.clear();
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarSucId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    console.clear();
                    let modificarProvId = rls.question("Ingrese el ID del Proveedor que desea modificar: ");
                    console.clear();
                    const indiceProveedor = redVeterinarias.getListaSucursales()[indiceSucursal].getListaProveedores().findIndex(suc => suc.getId() === modificarProvId);
                    if (indiceProveedor == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del proveedor que ingresaste, no existe");
                    } else {
                        console.clear();
                        redVeterinarias.getListaSucursales()[indiceSucursal].modificarProveedor(modificarProvId);
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaProv == 0) {
                console.clear();
                console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido de Proveedores`);
                finProveedor = true;
            }
        } while (finProveedor == false);

    } //if
    //CLIENTES
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 3) {
        let opcionNumericaCli: number;
        let finCliente: boolean = false;
        do {
            let salidaCli: boolean = false;
            do {
                console.log("Ingresaste a CLIENTES, presiona una opcion para continuar:");
                console.log("1- Para Crear a un Cliente Nuevo");
                console.log("2- Para Ver una lista de Clientes");
                console.log("3- Para Eliminar a un Cliente");
                console.log("4- Para Modificar un Cliente Existente");
                console.log("5- Para sumar una visita a un Cliente");
                console.log("6- Para ver si un Cliente es Vip o no");
                console.log("0- Para Volver");
                opcionNumericaCli = rls.questionInt("Elija su opcion: ");
                console.clear();
                if (opcionNumericaCli < 0 || opcionNumericaCli > 6) {
                    console.log('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
                } else {
                    salidaCli = true;
                }
            } while (salidaCli == false);
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaCli == 1) {
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 1- Crear a un Cliente Nuevo");
                let idCliente = rls.question("Ingrese el ID de la sucursal a la que desea agregarle un Cliente: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === idCliente);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que buscas, no existe");
                } else {
                    //se crea el nombre del Cliente
                    let nombreCliente: string = rls.question("Ingrese el nombre del nuevo Cliente (minimo 5 caracteres): ");
                    do {
                        if (nombreCliente.length < 5) {
                            console.log("Ingresaste un nombre con menos de 5 caracteres");
                            nombreCliente = rls.question("Ingrese nuevamente el nombre del Cliente (Recuerde minimo 5 caracteres): ");
                        }
                    } while (nombreCliente.length < 5);
                    //se crea el telefono del Proveedor
                    let telefonoCliente: number;
                    do {
                        telefonoCliente = rls.questionInt("Ingrese el telefono del Cliente (minimo 9 numeros - Ejemplo: 011905040): ");
                        if (telefonoCliente < 9) {
                            console.log("Ingresaste un telefono con menos de 9 numeros");
                        }
                    } while (telefonoCliente < 9);
                    let clienteNuevo: Cliente = new Cliente(nombreCliente, telefonoCliente);
                    redVeterinarias.getListaSucursales()[indiceSucursal].agregarCliente(clienteNuevo);
                    console.clear();
                    console.log('\x1b[33m%s\x1b[0m', `El Cliente ha sido creado con exito!`);
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaCli == 2) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 2- Ver una lista de Clientes");
                //se muestra la lista de Clientes existentes
                let idSucursal = rls.question("Ingrese el ID de la sucursal que contiene los Clientes que desea mostrar: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === idSucursal);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    console.clear();
                    console.table(redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes());
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaCli == 3) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 3- Eliminar a un Cliente");
                let identificarCliId = rls.question("Ingrese el ID de la Sucursal que contiene el Cliente a Eliminar: ");
                console.clear();
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarCliId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    console.clear();
                    let eliminarCliId = rls.question("Ingrese el ID del Cliente que desea Eliminar: ");
                    console.clear();
                    const indiceCliente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === eliminarCliId);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del Cliente que ingresaste, no existe");
                    } else {
                        console.clear();
                        redVeterinarias.getListaSucursales()[indiceSucursal].eliminarCliente(eliminarCliId);
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaCli == 4) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 4- Modificar un cliente");
                let identificarCliId = rls.question("Ingrese el ID de la Sucursal que contiene el cliente a modificar: ");
                console.clear();
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarCliId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    console.clear();
                    let modificarCliId = rls.question("Ingrese el ID del cliente que desea modificar: ");
                    console.clear();
                    const indiceCliente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === modificarCliId);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del cliente que ingresaste, no existe");
                    } else {
                        console.clear();
                        redVeterinarias.getListaSucursales()[indiceSucursal].modificarCliente(modificarCliId);
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaCli == 5) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 5- Sumar una visita a un Cliente");
                let identificarCliId = rls.question("Ingrese el ID de la Sucursal que contiene el cliente: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarCliId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    let modificarCliId = rls.question("Ingrese el ID del cliente: ");
                    console.clear();
                    const indiceCliente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === modificarCliId);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del cliente que ingresaste, no existe");
                    } else {
                        console.clear();
                        redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].sumarVisita();
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaCli == 6) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 6- Ver si un Cliente es Vip o no");
                let identificarCliId = rls.question("Ingrese el ID de la Sucursal que contiene el cliente: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarCliId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    let modificarCliId = rls.question("Ingrese el ID del cliente: ");
                    console.clear();
                    const indiceCliente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === modificarCliId);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del cliente que ingresaste, no existe");
                    } else {
                        console.clear();
                        redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getVip();
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaCli == 0) {
                console.clear();
                console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido de Proveedores`);
                finCliente = true;
            }
        } while (finCliente == false);

    } //if
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 4) {
        let opcionNumericaPac: number;
        let finPaciente: boolean = false;
        do {
            let salidaPac: boolean = false;
            do {
                console.log("Ingresaste a PACIENTES, presiona una opcion para continuar:");
                console.log("1- Para Crear a un Paciente Nuevo");
                console.log("2- Para Ver una lista de Pacientes");
                console.log("3- Para Eliminar a un Paciente");
                console.log("4- Para Modificar un Paciente Existente");
                console.log("0- Para Volver");
                opcionNumericaPac = rls.questionInt("Elija su opcion: ");
                console.clear();
                if (opcionNumericaPac < 0 || opcionNumericaPac > 4) {
                    console.log('\x1b[31m%s\x1b[0m', "Ingresaste un valor incorrecto, vuelve a ingresar: ");
                } else {
                    salidaPac = true;
                }
            } while (salidaPac == false);
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaPac == 1) {
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 1- Crear a un Paciente Nuevo");
                let idSucursal = rls.question("Ingrese el ID de la sucursal a la que desea agregarle un Paciente: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === idSucursal);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que buscas, no existe");
                } else {
                    let idCliente = rls.question("Ingrese el ID del cliente al que desea agregarle un Paciente: ");
                    const indiceCliente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === idCliente);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del cliente que buscas, no existe");
                    } else {
                        //se crea el nombre del Paciente
                        let nombrePaciente: string;
                        let existeNombre: number;
                        let salida : boolean = false;
                        do {
                            nombrePaciente = rls.question("Ingrese el nombre del nuevo Paciente (minimo 2 caracteres): ");
                            do {
                                if (nombrePaciente.length < 2) {
                                    console.log("Ingresaste un nombre con menos de 2 caracteres");
                                    nombrePaciente = rls.question("Ingrese nuevamente el nombre del Paciente (Recuerde minimo 2 caracteres): ");
                                }
                            } while (nombrePaciente.length < 2);
                            existeNombre = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente().findIndex(suc => suc.getNombrePaciente() === nombrePaciente);
                            if (existeNombre == -1) {
                                console.log('\x1b[33m%s\x1b[0m', "El nombre fue creado exitosamente");
                                salida = true;
                            } else {
                                salida = false;
                                console.clear();
                                console.log('\x1b[31m%s\x1b[0m', "El nombre ya existe, intente de nuevo");
                            }
                        } while (salida == false); 
                        //se crea la edad del Paciente
                        let edadPaciente: number;
                        do {
                            edadPaciente = rls.questionInt("Ingrese la edad del Paciente: ");
                            if (edadPaciente <= 0) {
                                console.log("Ingresaste una edad menor a 0, volve a ingresar");
                            }
                        } while (edadPaciente <= 0);
                        //se crea la genero del Paciente
                        let generoPaciente: string="";
                        let respuestaGenero: number;
                        let fin: boolean = false;
                        do {
                            respuestaGenero = rls.questionInt("Ingrese el genero del Paciente: 1 - Macho / 2 - Hembra: ");
                            if (respuestaGenero == 1) {
                                generoPaciente = "Macho";
                                console.log("Ingresaste genero Macho");
                                fin = true;
                            } else if (respuestaGenero == 2) {
                                generoPaciente = "Hembra";
                                console.log("Ingresaste genero Hembra");
                                fin = true;
                            } else {
                                console.log("Ingresaste una opcion incorrecta");
                            }
                        } while (fin == false);
                        //se crea la especie del Paciente
                        let especiePaciente: string ="";
                        let respuestaEspecie: number;
                        fin = false;
                        do {
                            respuestaEspecie = rls.questionInt("Ingrese la especie del Paciente: 1 - Perro / 2 - Gato / 3 - Exotico: ");
                            if (respuestaEspecie == 1) {
                                especiePaciente = "Perro";
                                console.log("Ingresaste Perro");
                                fin = true;
                            } else if (respuestaEspecie == 2) {
                                especiePaciente = "Gato";
                                console.log("Ingresaste Gato");
                                fin = true;
                            } else if (respuestaEspecie == 3) {
                                especiePaciente = "Exotico";
                                console.log("Ingresaste Exotico");
                                fin = true;
                            } else {
                                console.log("Ingresaste una opcion incorrecta");
                            }
                        } while (fin == false);
                        let PacienteNuevo: Paciente = new Paciente(nombrePaciente, edadPaciente, generoPaciente, especiePaciente);
                        redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].agregarPaciente(PacienteNuevo);
                        console.log('\x1b[33m%s\x1b[0m', `El Paciente ha sido creado con exito!`);
                        console.clear ();
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaPac == 2) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 2- Ver una lista de Pacientes");
                //se muestra la lista de Pacientes existentes
                let idSucursal = rls.question("Ingrese el ID de la sucursal relacionada al Paciente: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === idSucursal);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    let idCliente = rls.question("Ingrese el ID del cliente del que desea mostrar la lista de los Pacientes: ");
                    const indiceCliente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === idCliente);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del cliente que buscas, no existe");
                    } else {
                        console.table(redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente());
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaPac == 3) {
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 3- Eliminar a un Paciente");
                let identificarCliId = rls.question("Ingrese el ID de la Sucursal que contiene el Paciente a Eliminar: ");
                console.clear();
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarCliId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    let idCliente = rls.question("Ingrese el ID del cliente del que desea mostrar la lista de los Pacientes: ");
                    const indiceCliente  = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === idCliente);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del cliente que buscas, no existe");
                    } else {
                        console.clear();
                        let nombrePac = rls.question("Ingrese el Nombre del Paciente que desea Eliminar: ");
                        const indicePaciente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente().findIndex(suc => suc.getNombrePaciente() === nombrePac);
                        if (indicePaciente == -1) {
                            console.clear();
                            console.log('\x1b[31m%s\x1b[0m', "El Nombre del Paciente que ingresaste, no existe");
                        } else {
                            redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].eliminarPaciente(nombrePac);
                        }
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaPac == 4) {
                let salidaModificarPaciente : boolean = false;
                console.clear();
                console.log('\x1b[33m%s\x1b[0m', "Eligio la opcion 4- Modificar un paciente");
                let identificarCliId = rls.question("Ingrese el ID de la Sucursal que contiene el paciente a modificar: ");
                const indiceSucursal = redVeterinarias.getListaSucursales().findIndex(suc => suc.getId() === identificarCliId);
                if (indiceSucursal == -1) {
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m', "El Id de la sucursal que ingresaste, no existe");
                } else {
                    let modificarCliId = rls.question("Ingrese el ID del cliente relacionado con el paciente a modificar: ");
                    console.clear();
                    const indiceCliente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes().findIndex(suc => suc.getId() === modificarCliId);
                    if (indiceCliente == -1) {
                        console.clear();
                        console.log('\x1b[31m%s\x1b[0m', "El Id del cliente que ingresaste, no existe");
                    } else {
                        console.clear();
                        let nombrePac = rls.question("Ingrese el Nombre del Paciente que desea Modificar: ");
                        const indicePaciente = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente().findIndex(suc => suc.getNombrePaciente() === nombrePac);
                        if (indicePaciente == -1) {
                            console.clear();
                            console.log('\x1b[31m%s\x1b[0m', "El Nombre del Paciente que ingresaste, no existe");
                        } else {
                            do {
                                let respuestaModificarPaciente = rls.questionInt("Ingrese 1 para cambiar el nombre, 2 para cambiar la edad, 3 para cambiar el genero, 4 para cambiar la especie o 0 para volver: ")
                                //---------------------------------------------------------------------------------------------
                                if (respuestaModificarPaciente == 1) {
                                    let nombreNuevo : string;
                                    let existeNombre : number;
                                    let salida : boolean = false;
                                    do {
                                        nombreNuevo = rls.question("Ingrese el nuevo nombre del Paciente:  (minimo 2 caracteres): ");
                                        do {
                                            if (nombreNuevo.length < 2) {
                                                console.log("Ingresaste un nombre con menos de 2 caracteres");
                                                nombreNuevo = rls.question("Ingrese nuevamente el nombre del paciente (Recuerde minimo 2 caracteres): ");
                                            }
                                        } while (nombreNuevo.length < 2);
                                        existeNombre = redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente().findIndex(suc => suc.getNombrePaciente() === nombreNuevo);
                                        if (existeNombre == -1) {
                                            console.clear();
                                            console.log('\x1b[33m%s\x1b[0m', "El nombre fue creado exitosamente");
                                            salida = true;
                                        } else {
                                            salida = false;
                                            console.clear();
                                            console.log('\x1b[31m%s\x1b[0m', "El nombre ya existe, intente de nuevo");
                                        }
                                    } while (salida == false);
                                    redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente()[indicePaciente].setNombrePaciente(nombreNuevo);
                                    console.log('\x1b[33m%s\x1b[0m', `El Nuevo nombre es: ${nombreNuevo}.`);
                                    //---------------------------------------------------------------------------------------------
                                } if (respuestaModificarPaciente == 2) {
                                    let edadNueva = rls.questionInt("Ingrese la nueva ead del Paciente: ")
                                    do {
                                        if (edadNueva < 1) {
                                            console.log("Ingresaste una edad invalida");
                                            edadNueva = rls.questionInt("Ingrese nuevamente la edad del Paciente (Recuerde minimo 1 caracteres): ");
                                        }
                                    } while (edadNueva < 1);
                                    redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente()[indicePaciente].setEdad(edadNueva);
                                    console.log('\x1b[33m%s\x1b[0m', `La nueva edad es: ${edadNueva}.`);
                                    //---------------------------------------------------------------------------------------------
                                } if (respuestaModificarPaciente == 3) {
                                    let finGenero: boolean = false;
                                    let generoNuevo: string ="";
                                    do {
                                        let respuestaGenero = rls.questionInt("Ingrese el genero del Paciente: 1 - Macho / 2 - Hembra: ");
                                        if (respuestaGenero == 1) {
                                            generoNuevo = "Macho";
                                            console.log("Ingresaste genero Macho");
                                            finGenero = true;
                                        } else if (respuestaGenero == 2) {
                                            generoNuevo = "Hembra";
                                            console.log("Ingresaste genero Hembra");
                                            finGenero = true;
                                        } else {
                                            console.log("Ingresaste una opcion incorrecta");
                                        }
                                    } while (finGenero == false);
                                    redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente()[indicePaciente].setGenero(generoNuevo);
                                    console.log('\x1b[33m%s\x1b[0m', `El nuevo genero es: ${generoNuevo}.`);
                                    //---------------------------------------------------------------------------------------------
                                } if (respuestaModificarPaciente == 4) {
                                    let especieNueva: string="";
                                    let finEspecie: boolean = false;
                                    do {
                                        let respuestaEspecieNueva: number = rls.questionInt("Ingrese la especie del Paciente: 1 - Perro / 2 - Gato / 3 - Exotico: ");
                                        if (respuestaEspecieNueva == 1) {
                                            especieNueva = "Perro";
                                            console.log("Ingresaste Perro");
                                            finEspecie = true;
                                        } else if (respuestaEspecieNueva == 2) {
                                            especieNueva = "Gato";
                                            console.log("Ingresaste Gato");
                                            finEspecie = true;
                                        } else if (respuestaEspecieNueva == 3) {
                                            especieNueva = "Exotico";
                                            console.log("Ingresaste Exotico");
                                            finEspecie = true;
                                        } else {
                                            console.log("Ingresaste una opcion incorrecta");
                                        }
                                    } while (finEspecie == false);
                                    redVeterinarias.getListaSucursales()[indiceSucursal].getListaClientes()[indiceCliente].getListaPaciente()[indicePaciente].setEspecie(especieNueva);
                                    console.log('\x1b[33m%s\x1b[0m', `La nueva especie es: ${especieNueva}.`);
                                    
                                    //---------------------------------------------------------------------------------------------
                                } if (respuestaModificarPaciente == 0) {
                                    salidaModificarPaciente = true;
                                    console.clear();
                                    console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has vuelto al menu anterior`);
                                } if (respuestaModificarPaciente < 0 || respuestaModificarPaciente > 4) {
                                    console.log('\x1b[31m%s\x1b[0m', `Ingresaste un valor incorrecto, vuelva a ingresar`);
                                }
                            } while (salidaModificarPaciente == false);
                        }
                    }
                }
            }
            //---------------------------------------------------------------------------------------------
            if (opcionNumericaPac == 0) {
                console.clear();
                console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido de Proveedores`);
                finPaciente = true;
            }
        } while (finPaciente == false);

    } //if
    //FIN DEL SISTEMA
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opcionNumerica == 0) {
        console.clear();
        console.log('\x1b[31m%s\x1b[0m', `Eligio la opcion 0- Has salido del Sistema`);
        finalPrograma = true;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
} while (finalPrograma == false);
