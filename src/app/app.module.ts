import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelsiusComponent } from './component/celsius/celsius.component';
import { KelvinComponent } from './component/kelvin/kelvin.component';
import { FahrenheitComponent } from './component/fahrenheit/fahrenheit.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CelsiusComponent,
    KelvinComponent,
    FahrenheitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
