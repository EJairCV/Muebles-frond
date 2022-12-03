import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModeloItem } from '../Models/ModeloItem';
import { ServicioMueblesService } from '../servicio-muebles.service';
import { ServicioTipomaterialService } from '../servicio-tipomaterial.service';
import { ServicioTipomuebleService } from '../servicio-tipomueble.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  codigoItem:string="";
  nombre:string="";
  precioMayor:number=0;
  precioUnidad:number=0;
  tipoMaterial:string="";
  tipoMueble:string="";
  descripcion:string="";

  envioMaterial:string[]=[];
  envioTMueble:string[]=[];


  tipoMuebleArray:any;
  tipoMaterialArray:any;

  //objeto mueble

  muebleObjeto:any;

  constructor(private router:ActivatedRoute, private mueblesService:ServicioMueblesService, private servicioTMueble:ServicioTipomuebleService, private servicioMaterial:ServicioTipomaterialService ) { }
  
  ngOnInit(): void {
    //conseguir el param del link
    this.router.paramMap.subscribe(paramMap=>{
      let codigo:any;
      codigo=paramMap.get("detalleItem");
      this.codigoItem= codigo;
      this.buscarMueble();
    });
    
    this.servicioTMueble.getTipoMueble().subscribe(
      res=>{
        this.tipoMuebleArray=res;
      }
    );
    this.servicioMaterial.getTipoMaterial().subscribe(
      res=>{
        this.tipoMaterialArray=res;
      }
    );

    

  }
  public buscarMueble(){
    this.mueblesService.getBuscarMueble(this.codigoItem).subscribe(
      response=>{
        this.muebleObjeto= response;
        this.nombre=this.muebleObjeto.nombre;
        this.precioMayor=this.muebleObjeto.precioMayor;
        this.precioUnidad=this.muebleObjeto.precioUnidad;
        this.tipoMaterial=this.muebleObjeto.tipoMaterial;
        this.tipoMueble=this.muebleObjeto.tipoMueble;
        this.descripcion=this.muebleObjeto.descripcion;
      }
    )
  }
  public modificar(){
    this.mueblesService.putActualizarMueble(this.codigoItem,
      {
        nombre:this.nombre,
        precioUnidad:this.precioUnidad,
        precioMayor:this.precioMayor,
        descripcion:this.descripcion,
        tipoMaterial:this.envioMaterial,
        tipoMueble:this.envioTMueble
      }
      ).subscribe(res=>console.log(res),rej=>console.log(rej));
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
    this.modificar();
    alert("Mueble modificado");
  }

  

  



}
