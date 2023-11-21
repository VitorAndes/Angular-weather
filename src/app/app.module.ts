import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { CardWeekComponent } from './components/card-week/card-week.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    CardBigComponent,
    CardWeekComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
