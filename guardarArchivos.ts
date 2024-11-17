import * as fs from 'fs';

export function guardarArchivos(datos: string) : void {
    fs.appendFile('archivo.txt', datos + '\n', (error) => { 
        if (error) {
            console.error('Error al guardar el archivo:', error); 
            return;
        } 
    })
}