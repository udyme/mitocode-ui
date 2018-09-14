import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRolAsignarComponent } from './usuario-rol-asignar.component';

describe('UsuarioRolAsignarComponent', () => {
  let component: UsuarioRolAsignarComponent;
  let fixture: ComponentFixture<UsuarioRolAsignarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRolAsignarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRolAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
