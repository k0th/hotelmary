import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { HabitacionesComponent } from './modules/habitaciones/habitaciones.component';
import { RestaurantComponent } from './modules/restaurant/restaurant.component';
import { BarComponent } from './modules/bar/bar.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { ReservacionComponent } from './modules/reservacion/reservacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    HabitacionesComponent,
    RestaurantComponent,
    BarComponent,
    ServiciosComponent,
    ContactoComponent,
    ReservacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
