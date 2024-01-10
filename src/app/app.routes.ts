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
import { Modelo2Component } from './dashboard/pages/modelo2.component';

export const routes: Routes = [
  {
    path: 'pizza',
    title: 'pizza',
    data: { subtitle: 'pizza', estado: true },
    component: PizzaComponent
  },
  {
    path: 'error',
    title: 'error',
    data: { subtitle: 'error', estado: true },
    component: ErrorComponent
  },


  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [

      {
        path: 'figuras',
        title: 'Figuras',
        data: { subtitle: 'Modelos', estado: false },
        component: FigurasComponent,
      },
      {
        path: 'llaveros',
        title: 'Llaveros',
        data: { subtitle: 'Modelos', estado: false },
        component: LlaverosComponent,
      },
      {
        path: 'aretes',
        title: 'Aretes',
        data: { subtitle: 'Modelos', estado: false },
        component: AretesComponent,
      },
      {
        path: 'modelo',
        title: 'Modelo Seleccionado',
        data: { subtitle: 'Modelo', estado: false },
        component: ModeloComponent
      },
      {
        path: 'modelo2',
        title: 'Modelo2 Seleccionado',
        data: { subtitle: 'Modelo2', estado: false },
        component: Modelo2Component
      },
      {
        path: 'inicio',
        title: 'Inicio',
        data: { subtitle: 'Fogcxy', estado: true },
        component: IniciodashboardComponent,
      },
      {
        path: 'galeria',
        title: 'Impresoras',
        data: { subtitle: 'Gallery', estado: true },
        component: GaleriaComponent
      },
      {
        path: 'equipo',
        title: 'Equipo',
        data: { subtitle: 'team', estado: true },
        component: EquipoComponent
      },
      {
        path: 'contactanos',
        title: 'Contactanos',
        data: { subtitle: 'datos', estado: true },
        component: ContactanosComponent,
      },
      {
        path: 'registro',
        title: 'Registro',
        data: { subtitle: 'Registry', estado: false },
        component: Registro1Component
      },
      {
        path: 'login',
        title: 'Login',
        data: { subtitle: 'Login', estado: false },
        component: LoginComponent
      },
      {
        path: 'login2',
        title: 'Login2',
        data: { subtitle: 'Login2', estado: false },
        component: Login2Component
      },
      {
        path: 'login3',
        title: 'Login3',
        data: { subtitle: 'Login3', estado: false },
        component: Login3Component
      },
      {
        path: 'creditcard',
        title: 'creditcard',
        data: { subtitle: 'creditcard', estado: false },
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
