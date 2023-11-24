import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
<app-header-bar></app-header-bar>
<main class="grid grid-cols-2 gap-1 grid-rows-3 max-sm:grid-cols-1">
  <app-card-big class=""></app-card-big>
  <app-card-week class="max-sm:row-span-2"></app-card-week> 
</main>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-weather';
}