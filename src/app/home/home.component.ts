import { Component, OnInit } from '@angular/core';
import { ModeloItem } from '../Models/ModeloItem';
import { ServicioMueblesService } from '../servicio-muebles.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mueblesService:ServicioMueblesService) { }

  TmuebleRecivido:string="";
  TMaterialRecivido:string="";
  array2:any;
  public array:ModeloItem []=[];

  ngOnInit(): void {
    this.cargarMuebles();
  }
  public filtrarTipos(tipo:string){
    let array3:ModeloItem[]=[];
    this.setArrayMuebleItem(this.array2)
    for(let mueble in this.array){
      if (this.array[mueble].tipoMueble.includes(tipo)!=true) {       
        array3.push(this.array[mueble])
      }
    }
    this.array=array3;
  }

  public filtrarMaterial(material:string){
    console.log(material);
  }


  public cargarMuebles(){
    this.mueblesService.getMuebles().subscribe(
      response=>{ 
        let array2:any=response
        this.setArrayMuebleItem(array2);
        this.array2=response;
      }
    )
    
  }

  public setArrayMuebleItem(arrayEntrada:any[]){   
    this.array=[];
    arrayEntrada.forEach(mueble => {
      this.array.push(new ModeloItem (mueble._id, mueble.nombre, mueble.precioUnidad, mueble.precioMayor, mueble.descripcion, mueble.tipoMaterial,mueble.tipoMueble))
    });
    
  }

  

  

}
