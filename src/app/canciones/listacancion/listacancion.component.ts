import { Component, OnInit,Input } from '@angular/core';
import { CancionModelo } from '../modelos/cancion.modelo';
import { DatosCanciones } from '../modelos/datoscanciones';
import { HeaderComponent } from 'src/app/Header/header.component';
@Component({
  selector: 'app-listacancion',
  templateUrl: './listacancion.component.html',
  styleUrls: ['./listacancion.component.css']
})
export class ListacancionComponent{
  searchText = '';
  searchField = '';
  public canciones=DatosCanciones;
  public cancion_selecionada?:CancionModelo;
  public cancion_reproductor?:CancionModelo;
  public favorito:boolean=false;
  constructor() {    
  }

  ngOnInit(): void {
    this.searchField = 'autor'; 
  }
  

  ngDocheck(cancion: CancionModelo){
   this.cancion_selecionada=cancion; 
  }
  ngDoplay(cancion: CancionModelo){
    this.cancion_reproductor=cancion; 
   }
  megusta(){
    this.favorito=true;
  }
}