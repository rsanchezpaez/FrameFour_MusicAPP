import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CancionModelo } from '../canciones/modelos/cancion.modelo';
@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements AfterViewInit {
  //@Input() public cancion_reproductor?: CancionModelo;
  @Input() public src?: String;
  @Input() public titulo?: String;
  @Input() public autor?: String;
  @Input() public disco?: String;
  

  @ViewChild('audioElement', { static: false }) //coge el <audio #audioElement del dom y lo asigna a una variable
  public _audioRef!: ElementRef;
  @ViewChild('file', { static: false })
  public _file!: ElementRef;
  @ViewChild('momento', { static: false })
  public _momento!: ElementRef;
  public audio?: HTMLMediaElement;

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  public stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      //cambia el tiempo a 0
      if (this._momento) {
        this._momento.nativeElement.innerHTML =
          "<small><b>Duracion: " + Math.floor(this.audio.duration)
          + " s -- Restante: "
          + Math.floor(this.audio.duration - this.audio.currentTime)
          + " s</b></small>";
      }
      //añade al texto de duracion al reproductor en la etiqueta del dom #momento -->
    }
  }


  public play(): void {
    if (this.audio) {
      this.audio = this._audioRef.nativeElement;
      if (this.audio) {
        if (this.audio.readyState >= 2) {
          //si es igual o mayor a dos esta preparado para reproducirse
          this.audio.play();
        }
      }
    }
  }


  public ngAfterViewInit(): void {
    //se carga una vez se ha cargado la vista para tener los elementos definidos los ElementRef
    this.audio = this._audioRef.nativeElement;
    if (this.audio) {
      this.audio.addEventListener("timeupdate", (currentTime) => {
        // Codigo para actualizar la barra de progreso
        var value = 0;
        if (this.audio) {
          if (this.audio.currentTime > 0) {
            value = Math.floor((100 / this.audio.duration) * this.audio.currentTime);
            if (this._momento) {
              this._momento.nativeElement.innerHTML = "<small><b>Duracion: "
                + Math.floor(this.audio.duration)
                + " s -- Restante: " + Math.floor(this.audio.duration - this.audio.currentTime) + " s</b></small>";
            }
          }
        }

        if (this._file) {
          this._file.nativeElement.value = value;
        }
      }, false);

    }
  }

}
