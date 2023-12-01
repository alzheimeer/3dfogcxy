import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciodashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>iniciodashboard works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IniciodashboardComponent implements OnInit {

  ngOnInit(): void { }

}
