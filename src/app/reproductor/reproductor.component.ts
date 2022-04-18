import { Component,  Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

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
  
  @ViewChild('audioElement', { static: false })
  public _audioRef!: ElementRef;
  @ViewChild('file', { static: false })
  public _file!: any;
  @ViewChild('momento', { static: false })
  public _momento!: ElementRef;

  public audio?: HTMLMediaElement;
  private songTime: any = 0;


  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;
  

  public pause(): void {
    console.log(this.audio?.currentTime)
    this.audio!.currentTime += this.value
    console.log(this.value)
    console.log(this.audio?.currentTime)
    if (this.audio) {
      this.audio.pause();
    }
  }

  public stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      if (this._momento) { this._momento.nativeElement.innerHTML = "<small><b>Duracion: " + Math.floor(this.audio.duration) + " s -- Restante: " + Math.floor(this.audio.duration - this.audio.currentTime) + " s</b></small>"; }

    }
  }

  public play(): void {
    if (this.audio) {
      if(this.value != 0 )
      {
        this.audio.currentTime = 50
      }
      this.audio = this._audioRef.nativeElement;
      if (this.audio) {
        if (this.audio.readyState >= 2) {
          this.audio.play();
          
        }
      }
    }
  }

  

  public ngAfterViewInit(): void {

    this.audio = this._audioRef.nativeElement;
    if (this.audio) {
      this.songTime = this.audio.currentTime;
      this.audio.addEventListener("timeupdate", (currentTime) => {
        // Code to update progress bar goes here
        var progress = document.getElementById("file");
        var value = 0;

        if (this.audio) {
          if (this.audio.currentTime > 0) {
            this._file.value = Math.floor((100 / this.audio.duration) * this.audio.currentTime);
            if (this._momento) { this._momento.nativeElement.innerHTML = "<small><b>Duracion: " + Math.floor(this.audio.duration) + " s -- Restante: " + Math.floor(this.audio.duration - this.audio.currentTime) + " s</b></small>"; }
          }
        }

        this.value+=.1

        /*if (this._file) {
          this._file.nativeElement.value = value;
        }*/
      }, false);

    }
  }






}
