import { Component, OnInit } from '@angular/core';
import { ServicioTipomuebleService } from '../servicio-tipomueble.service';

@Component({
  selector: 'app-tipomueble',
  templateUrl: './tipomueble.component.html',
  styleUrls: ['./tipomueble.component.css']
})
export class TipomuebleComponent implements OnInit {

  constructor(private tipomuebleservice:ServicioTipomuebleService) { }

  arrayTipoMuebles:any;

  inputNuevoMueble:string="";

  ngOnInit(): void {
    this.tipomuebleservice.getTipoMueble().subscribe(
      res=>{
      console.log(res)
      this.arrayTipoMuebles=res;
      }
      );
  }

  public agregarMueble(){
    this.tipomuebleservice.postCrearTipoMueble({nombre:this.inputNuevoMueble}).subscribe();
  }
  
  public eliminarTipoMueble(id:string){
    this.tipomuebleservice.deleteTipoMueble(id).subscribe();
  }

}
