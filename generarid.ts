export class Generador {
    public generadorId () : number {
        let id = Math.floor (Math.random() * 101);
        return id;
    }
}