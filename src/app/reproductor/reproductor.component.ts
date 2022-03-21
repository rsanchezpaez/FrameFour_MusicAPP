import { Component, OnInit,Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CancionModelo } from '../canciones/modelos/cancion.modelo';
@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements AfterViewInit {
  @Input() public src?: String;
  @Input() public titulo?: String;
  @Input() public autor?: String;
  @Input() public disco?: String;
  @Input() public autoplay: boolean = false;
  @Input() public showStateLabel: boolean = false;
  public audioStateLabel = 'Audio sample';
  @Input() public volume: number = 1.0; /* 1.0 is loudest */
  @ViewChild('audioElement', { static: false }) 
  public _audioRef!: ElementRef;
  @ViewChild('file', { static: false }) 
  public _file!: ElementRef;
  @ViewChild('momento', { static: false }) 
  public _momento!: ElementRef;

 public audio?: HTMLMediaElement;
  private songTime: any = 0;
  public constructor() { 

   }  

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.audioStateLabel = 'Paused';
    }
  }
  public stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      if (this._momento){this._momento.nativeElement.innerHTML = "<small><b>Duracion: "+Math.floor(this.audio.duration)+ " s -- Restante: "+Math.floor(this.audio.duration-this.audio.currentTime)+" s</b></small>";}
 
    }
  }

  public get paused(): boolean {
    if (this.audio) {
      return this.audio.paused;
    } else {
      return true;
    }
  }
  public minuto(): void {
  }
  public play(): void {
    if (this.audio) {
      if (this.audio.readyState >= 2) {
        this.audio.play();
        this.audioStateLabel = 'Playing...'
      }
    }
  }

  public ngAfterViewInit() {
    this.audio = this._audioRef.nativeElement;
    if (this.audio) {   

      this.audio.volume = this.volume;
      this.audio.autoplay = this.autoplay;
      this.songTime = this.audio.currentTime;
      this.audio.addEventListener("timeupdate", (currentTime)=>{
        // Code to update progress bar goes here
        var progress = document.getElementById("file");
        var value = 0;
        
        if(this.audio){
          if (this.audio.currentTime > 0) {            
            value = Math.floor((100 / this.audio.duration) * this.audio.currentTime);
            if (this._momento){this._momento.nativeElement.innerHTML = "<small><b>Duracion: "+Math.floor(this.audio.duration)+ " s -- Restante: "+Math.floor(this.audio.duration-this.audio.currentTime)+" s</b></small>";}
         }
        }

        if (this._file){
        this._file.nativeElement.value = value;
        }
        },false);

        }
    }
  

}
