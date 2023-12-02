import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modelo2',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
  <div class="flex font-sans">
    <div class="flex-none w-48 relative">
      <img src="./assets/modelos/figuras/Babu-Grogu.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold text-gray-900">
          Babu - Grogu
        </h1>
        <div class="text-lg font-semibold text-black-500">
          $110.000
        </div>
        <div class="w-full flex-none text-sm font-medium text-black-700 mt-2">
          En stock Resina
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div class="space-x-2 flex text-sm">
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xs" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              9mm
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="s" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              15mm
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="m" checked/>
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              20mm
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="l" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              30mm
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xl" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              40mm
            </div>
          </label>
        </div>
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md border border-balck-800 text-gray-900" type="button">
            Solicitarlo
          </button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Favorites">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p class="text-sm text-slate-700">
        Envio Gratis Bogota
      </p>
    </form>
  </div>
</div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modelo2Component { }
