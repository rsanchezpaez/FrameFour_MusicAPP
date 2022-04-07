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
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Scroll } from '@angular/router';

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
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
