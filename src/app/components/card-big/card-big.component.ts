import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.css']
})
export class CardBigComponent {
  @Input()
  Today: string = ""
  @Input()
  RealFeel: string | number = ""

  @Input()
  Weather: string = ""
  @Input()
  IconTemp: string = ""
  @Input()
  IconUv: string = ""
  @Input()
  IconWind: string = ""
  @Input()
  IconUm: string = ""

  @Input()
  UvWeather: string | number = ""
  @Input()
  MaxWeather: string | number = ""
  @Input()
  WindWeather: string | number = ""
  @Input()
  UmWeather: string | number = ""

}
