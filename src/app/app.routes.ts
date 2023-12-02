import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FigurasComponent } from './dashboard/pages/figuras.component';
import { LlaverosComponent } from './dashboard/pages/llaveros.component';
import { AretesComponent } from './dashboard/pages/aretes.component';
import { IniciodashboardComponent } from './dashboard/pages/iniciodashboard.component';
import { LoginComponent } from './dashboard/pages/login.component';
import { ContactanosComponent } from './dashboard/pages/contactanos.component';
import { Login2Component } from './dashboard/pages/login2.component';
import { ModeloComponent } from './dashboard/pages/modelo.component';
import { CreditcardComponent } from './dashboard/pages/creditcard.component';
import { EquipoComponent } from './dashboard/pages/equipo.component';
import { GaleriaComponent } from './dashboard/pages/galeria.component';
import { Registro1Component } from './dashboard/pages/registro1.component';
import { Login3Component } from './dashboard/pages/login3.component';
import { PizzaComponent } from './dashboard/pages/pizza.component';
import { ErrorComponent } from './dashboard/pages/error.component';

export const routes: Routes = [
  {
    path: 'pizza',
    title: 'pizza',
    data: { subtitle: 'pizza' },
    component: PizzaComponent
  },
  {
    path: 'error',
    title: 'error',
    data: { subtitle: 'error' },
    component: ErrorComponent
  },


  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [

      {
        path: 'figuras',
        title: 'Figuras',
        data: { subtitle: 'Modelos' },
        component: FigurasComponent,
      },
      {
        path: 'llaveros',
        title: 'Llaveros',
        data: { subtitle: 'Modelos' },
        component: LlaverosComponent,
      },
      {
        path: 'aretes',
        title: 'Aretes',
        data: { subtitle: 'Modelos' },
        component: AretesComponent,
      },
      {
        path: 'modelo',
        title: 'Modelo Seleccionado',
        data: { subtitle: 'Modelo' },
        component: ModeloComponent
      },
      {
        path: 'inicio',
        title: 'Quienes Somos',
        data: { subtitle: 'Fogcxy' },
        component: IniciodashboardComponent,
      },
      {
        path: 'contactanos',
        title: 'Contactanos',
        data: { subtitle: 'datos' },
        component: ContactanosComponent,
      },
      {
        path: 'equipo',
        title: 'Equipo',
        data: { subtitle: 'team' },
        component: EquipoComponent
      },
      {
        path: 'galeria',
        title: 'Galeria',
        data: { subtitle: 'Gallery' },
        component: GaleriaComponent
      },
      {
        path: 'registro',
        title: 'Registro',
        data: { subtitle: 'Registry' },
        component: Registro1Component
      },
      {
        path: 'login',
        title: 'Login',
        data: { subtitle: 'Login' },
        component: LoginComponent
      },
      {
        path: 'login2',
        title: 'Login2',
        data: { subtitle: 'Login2' },
        component: Login2Component
      },
      {
        path: 'login3',
        title: 'Login3',
        data: { subtitle: 'Login3' },
        component: Login3Component
      },
      {
        path: 'creditcard',
        title: 'creditcard',
        data: { subtitle: 'creditcard' },
        component: CreditcardComponent
      },


      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];
