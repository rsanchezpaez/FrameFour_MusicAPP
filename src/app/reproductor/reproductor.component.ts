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


  public pause(): void {
    console.log("click en pausa" + this.audio?.currentTime)
    //this.audio!.currentTime += this.value
    //console.log("valor pelotita" + this.value)
    //console.log("segundo actual cancion" + this.audio?.currentTime)
    if (this.audio) {
      this.audio.pause();
    }
  }

  public stop(): void {
    console.log("click en stop" + this.audio?.currentTime)
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0
      this.value = 0;
      if (this._momento) { this._momento.nativeElement.innerHTML = "<small><b>Duracion: " + Math.floor(this.audio.duration) + " s -- Restante: " + Math.floor(this.audio.duration - this.audio.currentTime) + " s</b></small>"; }

    }
  }

  public play(): void {
    console.log("click en play" + this.audio?.currentTime)
    if (this.audio) {
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
            if (Math.floor(this.audio.duration - this.audio.currentTime) == 0 ){
              if (this._loop)
              {
                console.log('fin de la canción')
                this.audio.currentTime = 0
                this.value = 0
                console.log('voy a llamar al play')
                this.audio.play()
  
              }
            }
            }
        }

        this.value+=.1

        /*if (this._file) {
          this._file.nativeElement.value = value;
        }*/
      }, false);

    }
  }

  
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;
  _loop:boolean = false

  public getSliderTickInterval(): void { //que punto de la canción debe empezar a reproducir al soltarse
    this.audio = this._audioRef.nativeElement;
    if (this.audio) {
      this.playAtCurrentTime((this.audio.duration/100)*this.value)
    }
  }
  

  public playAtCurrentTime(currentTime?: number): void { //reproduce la canción en el lugar donde se suelte la pelotita
    
    if (this.audio) {
      if(this.value != 0 )
        this.audio = this._audioRef.nativeElement;
      if (this.audio && this.audio.readyState >= 2) {
        if(currentTime) {
          this.audio.currentTime = currentTime
        }
        this.audio.play();
  
      }
    }
  }

  public handlePlayer(): string{
    return this.audio?.paused ? 'play_arrow' : 'pause'
  }

  public mute(): void{
  if (this.audio) {this.audio.muted = !this.audio.muted}
  }


  public loop(): void{
    this._loop = !this._loop
  }



}