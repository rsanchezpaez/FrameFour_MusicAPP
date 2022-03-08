import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacancionComponent } from './listacancion.component';

describe('ListacancionComponent', () => {
  let component: ListacancionComponent;
  let fixture: ComponentFixture<ListacancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
