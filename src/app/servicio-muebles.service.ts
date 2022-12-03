import { Injectable } from '@angular/core';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class ServicioMueblesService {

  constructor(private data:DataService) { 

  }
  public getMuebles(){
    return this.data.get("http://localhost:9000/api/listarMueble")
  }
  public getBuscarMueble(id:string){
    return this.data.get("http://localhost:9000/api/listarMueble/"+id)
  }
  public postRegistrarMueble(body:any){
    return this.data.post("http://localhost:9000/api/crearMueble",body)
  }
  public putActualizarMueble(id:string,body:any){
    return this.data.post("http://localhost:9000/api/actualizarMueble/"+id,body);
  }
  public deleteEliminarMueble(id:string){
    return this.data.delete("http://localhost:9000/api/eliminarMueble/"+id);
  }




}
