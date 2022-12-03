import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioTipomaterialService } from '../servicio-tipomaterial.service';

@Component({
  selector: 'app-tipomaterial',
  templateUrl: './tipomaterial.component.html',
  styleUrls: ['./tipomaterial.component.css']
})
export class TipomaterialComponent implements OnInit {

  constructor(private servicioTipoMaterial:ServicioTipomaterialService,  private router:Router) { }

  arrayTipoMaterial:any;
  inputNuevoMaterial:string="";

  ngOnInit(): void {
    this.servicioTipoMaterial.getTipoMaterial().subscribe(res=>{
      this.arrayTipoMaterial=res;
    })
  }
  public agregarMaterial(){
    this.servicioTipoMaterial.postCrearTipoMaterial({nombre:this.inputNuevoMaterial}).subscribe();
  }
  public eliminarMaterial(id:string){
    this.servicioTipoMaterial.deleteTipoMaterial(id).subscribe();
    
  }

}
