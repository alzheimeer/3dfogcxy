import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
 <div class="flex flex-wrap -mx-3 mb-5">
    <div class="w-full max-w-full px-3 mb-6  mx-auto">
      <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
        <!-- card body  -->
        <div class="flex-auto block py-8 px-9">
          <div>
            <!-- Title -->
            <div class="mb-9">
              <h1 class="mb-2 text-[1.75rem] font-semibold text-dark">{{(figuras[0].category || '') | uppercase}}</h1>
              <span class="text-[1.15rem] font-medium text-muted">Escoge el modelo y realiza la cotización. </span>
            </div>

            <div class="flex flex-wrap w-full">
              @if (figuras.length > 0) {
                @for (figura of figuras; track $index) {
                  <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">


                    <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" [srcset]="figura.url" alt="avarat image">
                    </div>
                    <div class="text-center">
                      <a href="javascript:void(0)"
                        class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">{{figura.description}}</a>
                      <span class="block font-medium text-muted">{{figura.subtitle}}</span>
                    </div>
                     </div>
                  </div>
                }
              }@else {
              <h1>No Hay Datos</h1>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-5">
    <div class="w-full max-w-full sm:w-3/4 mx-auto text-center">
      <p class="text-sm text-slate-500 py-1"> 3D <a href="https://3d.fogcxy.com"
          class="text-slate-700 hover:text-slate-900" target="_blank">Fogcxy</a> by <a href="https://www.linkedin.com/in/alzheimeer/"
          class="text-slate-700 hover:text-slate-900" target="_blank">Alzheimeer</a>. </p>
    </div>
  </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .imagen {
      width: 230px;
      height: 230px;
      object-fit: cover;
    }
    @media (max-width: 600px) {
      img {
        width: 100%;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FigurasComponent {

  figuras = [
    { url: './assets/modelos/figuras/eagle.jpg', description: 'Aguila', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', description: 'Dragon Flame', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', description: 'Babu Y Grogu', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', description: 'Batman Buddha', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/eagle.jpg', description: 'Aguila', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', description: 'Dragon Flame', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', description: 'Babu Y Grogu', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', description: 'Batman Buddha', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/eagle.jpg', description: 'Aguila', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', description: 'Dragon Flame', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', description: 'Babu Y Grogu', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', description: 'Batman Buddha', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/eagle.jpg', description: 'Aguila', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', description: 'Dragon Flame', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', description: 'Babu Y Grogu', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', description: 'Batman Buddha', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/eagle.jpg', description: 'Aguila', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', description: 'Dragon Flame', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', description: 'Babu Y Grogu', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', description: 'Batman Buddha', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/eagle.jpg', description: 'Aguila', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', description: 'Dragon Flame', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', description: 'Babu Y Grogu', subtitle: 'PLA - Resina', category: 'figuras' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', description: 'Batman Buddha', subtitle: 'PLA - Resina', category: 'figuras' },

  ];

}
