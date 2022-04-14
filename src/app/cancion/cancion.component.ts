import { Component, Input } from '@angular/core';
import { CancionModelo } from '../canciones/modelos/cancion.modelo';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent {

  reactiveForm = new FormGroup({
    anio: new FormControl(''),
    titulo: new FormControl(''),
    disco: new FormControl(''),
    autor: new FormControl(''),
    estilo: new FormControl(''),
    caratula: new FormControl('')
  })

  @Input() cancion_individual?: CancionModelo;
  constructor(private store: AngularFirestore, private fb: FormBuilder) { }
  dataSource: any;
  editObj: any;
  modify(id: string, campo: string) {
    this.store.doc(`songs/${id}`).update({ campo: this.reactiveForm.get(campo)?.value });
  }
  add(id: string) {
    if (this.reactiveForm.get('titulo')?.value != '')
      this.store.doc(`songs/${id}`).update({ titulo: this.reactiveForm.get('titulo')?.value });
    if (this.reactiveForm.get('anio')?.value != '')
      this.store.doc(`songs/${id}`).update({ anio: this.reactiveForm.get('anio')?.value });
    if (this.reactiveForm.get('disco')?.value != '')
      this.store.doc(`songs/${id}`).update({ disco: this.reactiveForm.get('disco')?.value });
    if (this.reactiveForm.get('autor')?.value != '')
      this.store.doc(`songs/${id}`).update({ autor: this.reactiveForm.get('autor')?.value });
    if (this.reactiveForm.get('estilo')?.value != '')
      this.store.doc(`songs/${id}`).update({ estilo: this.reactiveForm.get('estilo')?.value });

  }
  cerrar(): void {
    delete this.cancion_individual;
  }
}
