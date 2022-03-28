import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { CancionComponent } from './cancion/cancion.component';
import { ListacancionComponent } from './canciones/listacancion/listacancion.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReproductorComponent } from './reproductor/reproductor.component';
@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListacancionComponent,
    HeaderComponent,
    FilterPipe,
    ReproductorComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
