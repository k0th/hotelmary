import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { HabitacionesComponent } from './modules/habitaciones/habitaciones.component';
import { RestaurantComponent } from './modules/restaurant/restaurant.component';
import { BarComponent } from './modules/bar/bar.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { ContactoComponent } from './modules/contacto/contacto.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'habitaciones',
    component: HabitacionesComponent
  },
  {
    path: 'restaurante',
    component: RestaurantComponent
  },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
