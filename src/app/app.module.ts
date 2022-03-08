import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionesModulo } from './canciones/cancion.modulo';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CancionesModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
