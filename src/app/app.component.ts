import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
<app-header-bar></app-header-bar>
<app-card-big></app-card-big>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-weather';
}
