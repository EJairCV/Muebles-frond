import { Component, Input, OnInit } from '@angular/core';

import { ModeloItem } from '../Models/ModeloItem';
import { ServicioMueblesService } from '../servicio-muebles.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input()item:ModeloItem = new ModeloItem(0,"",0,0,"",[],[]);
  constructor(private mueblesService:ServicioMueblesService) { }

  ngOnInit(): void {
  }


  public eliminarMueble(id:number){
    this.mueblesService.deleteEliminarMueble(id.toString()).subscribe(
      
    );
    console.log(id);
    console.log(typeof(id))
  }
}
