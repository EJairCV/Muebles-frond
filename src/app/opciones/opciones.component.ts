import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ServicioTipomaterialService } from '../servicio-tipomaterial.service';
import { ServicioTipomuebleService } from '../servicio-tipomueble.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {
  arrayMateriales:any;
  arrayTipoMueble:any;
  @Output() materialEnvio = new EventEmitter<string>();
  @Output() tipoEnvio = new EventEmitter<string>();
  constructor(private tipomueble:ServicioTipomuebleService, private tipomaterial:ServicioTipomaterialService) { }

  ngOnInit(): void {
    this.tipomueble.getTipoMueble().subscribe(res=>{
      this.arrayTipoMueble=res;
    })
    this.tipomaterial.getTipoMaterial().subscribe(res=>{
      this.arrayMateriales=res;
    })
  }

  public enviarTMaterial(material:string){
    this.materialEnvio.emit(material);
  }

  public enviarTMueble(tMueble:string){
    this.tipoEnvio.emit(tMueble);
  }
  

}
