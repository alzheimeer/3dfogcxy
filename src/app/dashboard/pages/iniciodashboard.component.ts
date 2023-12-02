import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciodashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

<div class="relative  bg-blueGray-50">
  <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('./assets/fondos/osman-talha-dikyar-DAN_8SELMB8-unsplash.jpg');

          ">
      <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">¡La vida de tus ideas comienza con nosotros!</h1>


            <p class="mt-4 text-lg text-blueGray-200">
              Te ofrecemos una plataforma fácil de usar y contamos con la tecnología más avanzada para transformar tus diseños en objetos reales.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
      style="transform: translateZ(0px)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </div>
  <div class="pb-10 bg-blueGray-200 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                <i class="fas fa-award"></i>
              </div>
              <h6 class="text-xl font-semibold">Libera tu creatividad</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Convierte tus bocetos, modelos 3D o diseños CAD en objetos tangibles.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12 px-4 text-center">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                <i class="fas fa-retweet"></i>
              </div>
              <h6 class="text-xl font-semibold">Elige entre una amplia variedad de materiales</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                PLA, TPU, ABS, PETG, RESINA
              </p>
            </div>
          </div>
        </div>
        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                <i class="fas fa-fingerprint"></i>
              </div>
              <h6 class="text-xl font-semibold">Venta De Impresoras Y Insumos</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Productos Importados!!! Preguntanos
              </p>
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
    </div>
  </div>
  `,
  styleUrls: ["../../../assets/css/tailwindinicio.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IniciodashboardComponent implements OnInit {

  ngOnInit(): void { }

}
