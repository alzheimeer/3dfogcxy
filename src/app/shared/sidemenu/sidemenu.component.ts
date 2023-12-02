import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
          <div id="menu" class="bg-gray-900 min-h-full z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll">
            <div id="logo" class="my-4 px-6">
              <h1 class="text-lg md:text-2xl font-bold text-white">3D<span class="text-blue-500">FogCxy</span></h1>
              <p class="text-slate-500 text-sm">Colombia</p>
            </div>
            <div id="profile" class="px-6 py-10">
              <p class="text-slate-500">Bienvenido</p>
              <a routerLink="/login" class="inline-flex space-x-2 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
                  <path fill="#ffffff" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" /> </svg>
                </span>
                <span class="text-sm md:text-base font-bold"> Ingresa a tu Cuenta </span>
              </a>
            </div>
            <div id="nav" class="w-full px-6">

              <p class="text-slate-500">Modelos</p>
              @for(item of menuItems; track $index) {
              <a [routerLink]="item.path" routerLinkActive="bg-blue-800"
                class="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">

                <div class="flex flex-col">
                  <span class="text-lg font-bold leading-5 text-white">{{item.title}}</span>
                  <span class="text-sm  text-white/50 md:block">{{item.data?.['subtitle']}}</span>
                </div>
              </a>
              }

            </div>
          </div>
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {

  menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route?.path)
    .filter(route => !route.path?.includes(':'))

}
