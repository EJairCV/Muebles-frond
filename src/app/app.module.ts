import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleItemComponent } from './detalle-item/detalle-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearMuebleComponent } from './crear-mueble/crear-mueble.component';
import { TipomaterialComponent } from './tipomaterial/tipomaterial.component';
import { TipomuebleComponent } from './tipomueble/tipomueble.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    OpcionesComponent,
    ItemsComponent,
    CarruselComponent,
    FooterComponent,
    DetalleComponent,
    NosotrosComponent,
    ContactoComponent,
    DetalleItemComponent,
    CrearMuebleComponent,
    TipomaterialComponent,
    TipomuebleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
