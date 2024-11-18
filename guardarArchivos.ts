import * as fs from 'fs';


export function guardarArchivos(datos: string): void {
    try {
        fs.writeFileSync('archivo.txt', datos + '\n', { flag: 'a' });
        console.log('Archivo guardado exitosamente.');
    } catch (error) {
        console.error('Error al guardar el archivo:', error);

    }
}