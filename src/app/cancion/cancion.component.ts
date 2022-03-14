import { Component, Input, OnInit } from '@angular/core';
import { CancionModelo } from '../canciones/modelos/cancion.modelo';
@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  @Input() cancion_individual?: CancionModelo;
  constructor() { }
cerrar(): void {
  delete this.cancion_individual;
}
reproducir(funcion:string): void {
  var audio = new Audio();
  audio.src = "../assets/sample-15s.mp3";
  audio.load();
  if (funcion=="detener"){audio.pause();}
  else{
    audio.play();
  }

  }

  ngOnInit(): void {
  }

}
