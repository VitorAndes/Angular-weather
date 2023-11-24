import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
<app-header-bar></app-header-bar>
<main class="grid grid-cols-2 gap-1 grid-rows-3 max-sm:grid-cols-1">
  <app-card-big 
  Today="Terça"
  RealFeel= "39°"
  Weather="Predominantemente nublado"
  IconTemp= "https://cdn4.iconfinder.com/data/icons/weather-129/64/weather-10-256.png"
  IconUm= "https://cdn2.iconfinder.com/data/icons/nautical/32/water_drop-256.png"
  IconWind="https://cdn1.iconfinder.com/data/icons/air-transport-3/48/Wind-256.png"
  IconUv="https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-8/32/uv-index--alt-256.png"
  MaxWeather= "32°/25°"
  UmWeather= "67%"
  WindWeather= "10 km"
  UvWeather= "7 de 11"
  ></app-card-big>
  <app-card-week class="max-sm:row-span-2"></app-card-week> 
</main>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-weather';
}