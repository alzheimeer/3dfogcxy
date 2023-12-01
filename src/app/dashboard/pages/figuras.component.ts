import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div *ngFor="let figura of figuras">
        <img [src]="figura.url" alt="Figura" class="imagen">
        <p class="text-center">{{figura.descripcion}}</p>
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
    { url: './assets/modelos/figuras/eagle.jpg', descripcion: 'Aguila' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', descripcion: 'Dragon Flame' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', descripcion: 'Babu Y Grogu' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', descripcion: 'Batman Buddha' },
    { url: './assets/modelos/figuras/eagle.jpg', descripcion: 'Aguila' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', descripcion: 'Dragon Flame' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', descripcion: 'Babu Y Grogu' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', descripcion: 'Batman Buddha' },
    { url: './assets/modelos/figuras/eagle.jpg', descripcion: 'Aguila' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', descripcion: 'Dragon Flame' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', descripcion: 'Babu Y Grogu' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', descripcion: 'Batman Buddha' },
    { url: './assets/modelos/figuras/eagle.jpg', descripcion: 'Aguila' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', descripcion: 'Dragon Flame' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', descripcion: 'Babu Y Grogu' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', descripcion: 'Batman Buddha' },
    { url: './assets/modelos/figuras/eagle.jpg', descripcion: 'Aguila' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', descripcion: 'Dragon Flame' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', descripcion: 'Babu Y Grogu' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', descripcion: 'Batman Buddha' },
    { url: './assets/modelos/figuras/eagle.jpg', descripcion: 'Aguila' },
    { url: './assets/modelos/figuras/flame_dragon1.jpg', descripcion: 'Dragon Flame' },
    { url: './assets/modelos/figuras/Babu-Grogu.jpg', descripcion: 'Babu Y Grogu' },
    { url: './assets/modelos/figuras/batman_buddha.jpg', descripcion: 'Batman Buddha' },
    // Añade más figuras aquí
  ];
}
