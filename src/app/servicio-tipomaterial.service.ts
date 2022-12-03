import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioTipomaterialService {

  constructor(private data:DataService) { }

  public getTipoMaterial(){
    return this.data.get("http://localhost:9000/api/listarTipoMaterial");
  }
  public deleteTipoMaterial(id:string){
    return this.data.delete("http://localhost:9000/api/eliminarTipoMaterial/"+id);
  }
  public postCrearTipoMaterial(body:any){
    return this.data.post("http://localhost:9000/api/crearTipoMaterial",body);
  }

}
