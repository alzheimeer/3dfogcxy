import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-llaveros',
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
          <div class="mb-9">
            <h1 class="mb-2 text-[1.75rem] font-semibold text-dark">Our Executive Team</h1>
            <span class="text-[1.15rem] font-medium text-muted"> Meet our talented team, a dynamic group of experts driven by passion and innovation. </span>
          </div>
          <div class="flex flex-wrap w-full">
            <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg" alt="avarat image">
              </div>
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Samantha Reynolds</a>
                <span class="block font-medium text-muted">Marketing Manager</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar2.jpg" alt="avarat image">
              </div>
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Benjamin Martinez</a>
                <span class="block font-medium text-muted">Sales Executive</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar5.jpg" alt="avarat image">
              </div>
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Emily Turner</a>
                <span class="block font-medium text-muted">Customer Support</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar24.jpg" alt="avarat image">
              </div>
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Jason Anderson</a>
                <span class="block font-medium text-muted">Development Engineer</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar23.jpg" alt="avarat image">
              </div>
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Olivia Carter</a>
                <span class="block font-medium text-muted">Creative Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-wrap -mx-3 mb-5">
  <div class="w-full max-w-full sm:w-3/4 mx-auto text-center">
    <p class="text-sm text-slate-500 py-1"> Tailwind CSS Component from <a href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents" class="text-slate-700 hover:text-slate-900" target="_blank">Riva Dashboard</a> by <a href="https://www.loopple.com" class="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>. </p>
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
export class LlaverosComponent implements OnInit {

  ngOnInit(): void { }

}
