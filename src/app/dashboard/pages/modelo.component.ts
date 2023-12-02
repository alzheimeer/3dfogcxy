import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modelo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
  <div class="mx-auto px-5">
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img class="w-full rounded-lg object-cover object-center" src="./assets/modelos/figuras/eagle.jpg" alt="product" />
      <div>
        <div class="my-6 flex items-center justify-between px-4">
          <p class="font-bold text-gray-500">Aguila</p>
          <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">4 DIAS</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">PLA</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">$60.000</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">TPEG</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">$80.000</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">TPU</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">$100.000</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">ABS</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">$120.000</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">RESINA</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">$150.000</p>
        </div>
      </div>
    </div>
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
export class ModeloComponent { }
