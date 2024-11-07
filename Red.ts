
export class Red {

    protected sucursal:Sucursal[]

    constructor(sucursal:Sucursal[]) {
        this.sucursal = sucursal;  
    }

    public getSucursal():Sucursal[]{
        return this.sucursal;

    }

    public setSucursal(sucursal:Sucursal[]):void{
        this.sucursal=sucursal;
    }
    public agregarSucursal(){
        this.sucursal.push(new Sucursal);

    }

    public eliminarSucursal(){
        this.sucursal.pop();
    }

}