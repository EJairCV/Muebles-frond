import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { ServicioMueblesService } from '../servicio-muebles.service';
import { ServicioTipomaterialService } from '../servicio-tipomaterial.service';
import { ServicioTipomuebleService } from '../servicio-tipomueble.service';

@Component({
  selector: 'app-crear-mueble',
  templateUrl: './crear-mueble.component.html',
  styleUrls: ['./crear-mueble.component.css']
})
export class CrearMuebleComponent implements OnInit {

  constructor(private mueblesService:ServicioMueblesService, private tipoMuebleService:ServicioTipomuebleService, private tipoMaterialService:ServicioTipomaterialService, private router:Router) { }
  muebleObjeto:any;
  nombre:string="Prueba";
  precioUnidad:number=0;
  precioMayor:number=0;
  tipoMaterial:string="";
  tipoMueble:string="";
  descripcion:string="Prueba descripcion";

  
  envioMaterial:string[]=[];
  envioTMueble:string[]=[];


  tipoMuebleArray:any;
  tipoMaterialArray:any;



  ngOnInit(): void {
    this.tipoMuebleService.getTipoMueble().subscribe(
      res=>{
        this.tipoMuebleArray=res;
      }
    );
    this.tipoMaterialService.getTipoMaterial().subscribe(
      res=>{
        this.tipoMaterialArray=res;
      }
    );
  }

  public crearMueble(){
    
    this.mueblesService.postRegistrarMueble(
      {
        nombre:this.nombre,
        precioUnidad:this.precioUnidad,
        precioMayor:this.precioMayor,
        tipoMaterial:this.envioMaterial,
        tipoMueble:this.envioTMueble,
        descripcion:this.descripcion
      }).subscribe();
  }

  public retornarmateriales(){
    
    
    return { i1: new FormControl, i2 : new FormControl};
  }

  public prueba(form:NgForm,form2:NgForm){
    
    for(let item in form.value){
      if(form.value[item]==true){
        console.log("nombre del Mueble "+item+" es verdadero")
        this.envioTMueble.push(item);
      }
    };
    
    for(let item in form2.value){
      if(form2.value[item]==true){
        console.log("nombre del material "+item+" es verdadero")
        this.envioMaterial.push(item);
      }
    }
    this.crearMueble();
    alert("Mueble creado")
    
  }
}
