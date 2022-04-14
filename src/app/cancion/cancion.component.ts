import { Component, Input, OnInit } from '@angular/core';
import { CancionModelo } from '../canciones/modelos/cancion.modelo';



@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  @Input() cancion_individual?: CancionModelo;

  cerrar(): void {
    delete this.cancion_individual;
  }
  ngOnInit(): void {
  }

}
