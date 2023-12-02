import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
        <div class="section font-semibold px-16 text-gray-800 fixed w-full top-0 flex header_section bg-gray-100 shadow z-10">
        <div class="sub_head flex my-auto py-3">
          <div class="logo w-14"><img class="w-full" src="https://w7.pngwing.com/pngs/903/640/png-transparent-pizza-logo-euclidean-color-logo-material-pizza-other-color-splash-free-logo-design-template.png" alt="" /></div>
           <div class="text ml-2 my-auto flex-none">Pizzería</div>
        </div>
        <div class="sub_head ml-auto flex space-x-8 my-auto">
         <div class="h_btns cursor-pointer">Inicio</div>
          <div class="h_btns cursor-pointer">Productos</div>
          <div class="h_btns cursor-pointer">Ordenar</div>
          <div class="h_btns cursor-pointer">Acerca de</div>
        </div>
      </div>
      <!-- section end -->

      <div class="section bg-image flex overflow-hidden h-screen text-gray-800">
        <div class="hero bg-gray-200 text-center grid md:grid-cols-2 border w-4/6 m-auto p-8 bg-opacity-90 rounded-lg">
          <img class="icon m-auto rounded-lg" src="https://static.cms.yp.ca/ecms/media/1/11042220_lel-1444925848-600x360.jpg" alt="" />
          <div class="text m-auto text-lg md:ml-5 p-5 md:text-left">
            <div class="head text-3xl mb-3 font-semibold">¿Por qué amamos la pizza?</div>
            <div class="desc">Hay una razón por la que la pizza es tan popular. Los humanos se sienten atraídos por los alimentos que son grasos, dulces, ricos y complejos. La pizza tiene todos estos componentes. El queso es graso, las coberturas de carne suelen ser ricas y la salsa es dulce.</div>
          </div>
        </div>
      </div>
      <!-- section end -->

            <div class="heading_section italic bg-gray-200 font-semibold text-3xl text-center p-5 pt-24 text-gray-800">Algunos estilos de pizza bien conocidos</div>
      <!-- section end -->

      <div class="section cards mx-auto border grid md:grid-cols-3 md:px-12 bg-gray-200 text-gray-800">
        <div class="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
          <div class="img"><img class="w-full h-full" src="https://static.toiimg.com/thumb/76481989.cms?width=680&height=512&imgsize=170646" alt="" /></div>
          <div class="text p-5 pt-2 text-center">
            <div class="title font-semibold my-2 text-xl text-red-700">Pepperoni</div>
            <div class="desc">Un clásico. Solo tienes que poner unas cuantas (o muchas) rodajas de pepperoni encima del queso, y pronto tendrás una pizza grasosa, ligeramente picante y deliciosa con la que simplemente no puedes equivocarte.</div>
          </div>
        </div>
        <!-- eachcard -->
        <div class="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
          <div class="img"><img class="w-full h-full" src="https://static.toiimg.com/thumb/76481989.cms?width=680&height=512&imgsize=170646" alt="" /></div>
          <div class="text p-5 pt-2 text-center">
            <div class="title font-semibold my-2 text-xl text-red-700">Pepperoni</div>
            <div class="desc">Un clásico. Solo tienes que poner unas cuantas (o muchas) rodajas de pepperoni encima del queso, y pronto tendrás una pizza grasosa, ligeramente picante y deliciosa con la que simplemente no puedes equivocarte.</div>
          </div>
        </div>
        <!-- eachcard -->
        <div class="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
          <div class="img"><img class="w-full h-full" src="https://static.toiimg.com/thumb/76481989.cms?width=680&height=512&imgsize=170646" alt="" /></div>
          <div class="text p-5 pt-2 text-center">
            <div class="title font-semibold my-2 text-xl text-red-700">Pepperoni</div>
            <div class="desc">Un clásico. Solo tienes que poner unas cuantas (o muchas) rodajas de pepperoni encima del queso, y pronto tendrás una pizza grasosa, ligeramente picante y deliciosa con la que simplemente no puedes equivocarte.</div>
          </div>
        </div>
        <!-- eachcard -->
      </div>
      <!-- section end -->

      <div class="section py-28 w-full scree border grid md:grid-cols-2 bg-gray-200 text-gray-800">
        <div class="subsec flex-none overflow-hidden max-h-96">
          <img class="w-full" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*" alt="" />
        </div>
        <div class="subsec my-auto p-8">
          <div class="title font-semibold text-3xl mb-5">¿De qué está hecho la masa de pizza paleo?</div>
          <div class="desc text-lg">Lo hemos visto de todas las formas, con diferentes tipos de harinas, pero nos decidimos por la harina de almendras por su sabor a nuez. También mezclamos especias: condimento italiano y ajo en polvo para darle más sabor. Omitimos la levadura porque puede ser un problema e incorporamos huevos y aceite de oliva. Los huevos ayudan a hacer la masa esponjosa.</div>
        </div>
      </div>
      <!-- section end -->

      <div class="heading_section bg-red-600 text-gray-300">
        <div class="footer w-5/6 mx-auto text-center">
          <div class="sub flex-1 p-8">
            <div class="text-3xl mb-3 uppercase">Contáctanos</div>
            <div class="info">
              <div class="name">Pizzería</div>
              <div class="name text-sm">
                Calle 4996 Brown Bear Drive <br>
                Ciudad Mira Loma Estado CA Estado Completo California <br>
                Código Postal 91752 <br>
                Número de Teléfono 951-634-4557 <br>
                Número de Móvil 951-903-8940
              </div>
            </div>
          </div>
          <div class="sub flex p-5 w-5/6 mx-auto border-t">
            <div class="cursor-pointer hover:underline items mx-auto">Nuestros Socios</div>
            <div class="cursor-pointer hover:underline items mx-auto">Politicas</div>
            <div class="cursor-pointer hover:underline items mx-auto">Facilidades</div>
            <div class="cursor-pointer hover:underline items mx-auto">Desarrollo</div>
          </div>
        </div>
      </div>
      <!-- section end -->


      <!-- gap filling for preview bottom overlay -->
      <div class="filling pt-14"></div>
  `,
  styles: `
    :host {
      display: block;
    }
    .bg-image {
          background:url(https://artisanpizzakitchen.com/wp-content/uploads/2018/05/373_photo3.jpg);
          background-size:cover;
          background-repeat:no-repeat;
        }

    body {background:white !important;}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaComponent { }
