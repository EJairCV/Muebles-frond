export class ModeloItem{
    constructor(codigo:number, nombre:string, precioUnidad:number, precioMayor:number, descripcion:string, tipoMaterial:string[], tipoMueble:string[]){
        this._id = codigo;
        this.nombre =nombre;
        this.precioUnidad=precioUnidad;
        this.precioMayor=precioMayor;
        this.descripcion=descripcion;
        this.tipoMaterial=tipoMaterial;
        this.tipoMueble=tipoMueble;
    }
    public _id:number=0;
    public nombre:string="Nombre prueba";
    public precioUnidad:number=0;
    public precioMayor:number=0;
    public descripcion:string="descripción prueba";
    public tipoMaterial:string[]=[];
    public tipoMueble:string[]=[];
    public __v:number=0;
    
}