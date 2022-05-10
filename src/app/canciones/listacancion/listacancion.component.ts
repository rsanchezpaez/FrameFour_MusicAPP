import { Component, OnInit, Input } from '@angular/core';
import { CancionModelo } from '../modelos/cancion.modelo';
import { DatosCanciones } from '../modelos/datoscanciones';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-listacancion',
  templateUrl: './listacancion.component.html',
  styleUrls: ['./listacancion.component.css']
})
export class ListacancionComponent {
  searchText = '';
  searchField = '';
  public canciones = DatosCanciones;
  public cancion_selecionada?: CancionModelo;
  public cancion_reproductor?: CancionModelo;

  constructor(private store: AngularFirestore) { }
  dataSource: any;
  ngOnInit(): void {
    this.searchField = 'autor';
    this.getAll();
  }

  getAll() {
    this.store.collection('songs').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item =>
        Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())     
      );
    })
  }

  ngDocheck(cancion: CancionModelo) {
    this.cancion_selecionada = cancion;

  }

  ngDoplay(cancion: CancionModelo) {
    this.cancion_reproductor = cancion;
    this.cancion_selecionada = cancion;
  }

}