import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FigurasComponent } from './dashboard/pages/figuras.component';
import { LlaverosComponent } from './dashboard/pages/llaveros.component';
import { AretesComponent } from './dashboard/pages/aretes.component';
import { IniciodashboardComponent } from './dashboard/pages/iniciodashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'inicio',
        title: 'Quienes Somos',
        data: { subtitle: 'Fogcxy' },
        component: IniciodashboardComponent,
      },
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
