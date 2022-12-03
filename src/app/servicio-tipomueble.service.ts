import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioTipomuebleService {

  constructor(private data:DataService) { }

  public getTipoMueble(){
    return this.data.get("http://localhost:9000/api/listarTipoMueble");
  }
  public deleteTipoMueble(id:string){
    return this.data.delete("http://localhost:9000/api/eliminarTipoMueble/"+id);
  }
  public postCrearTipoMueble(body:any){
    return this.data.post("http://localhost:9000/api/crearTipoMueble",body);
  }
}
