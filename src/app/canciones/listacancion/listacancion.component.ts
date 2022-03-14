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
  public canciones=DatosCanciones;
  public cancion_selecionada?:CancionModelo;
  public favorito:boolean=false;
  constructor() {    
  }

  ngOnInit(): void {
  }
  

  ngDocheck(cancion: CancionModelo){
   this.cancion_selecionada=cancion; 
  }
  megusta(){
    this.favorito=true;
  }
}