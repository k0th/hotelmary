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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideComponent } from './components/slide/slide.component';
import { HomeComponent } from './modules/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    HabitacionesComponent,
    RestaurantComponent,
    BarComponent,
    ServiciosComponent,
    ContactoComponent,
    ReservacionComponent,
    NavbarComponent,
    SlideComponent,
    HomeComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent, SlideComponent]
})
export class AppModule { }
