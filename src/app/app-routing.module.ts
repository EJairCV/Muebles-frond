import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearMuebleComponent } from './crear-mueble/crear-mueble.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TipomaterialComponent } from './tipomaterial/tipomaterial.component';
import { TipomuebleComponent } from './tipomueble/tipomueble.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"nosotros",component:NosotrosComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"detalle/:detalleItem",component:DetalleComponent},
  {path:"crear",component:CrearMuebleComponent},
  {path:"creartipomueble",component:TipomuebleComponent},
  {path:"creartipomaterial",component:TipomaterialComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
