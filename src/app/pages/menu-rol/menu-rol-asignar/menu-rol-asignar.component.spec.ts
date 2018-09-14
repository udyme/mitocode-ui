import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRolAsignarComponent } from './menu-rol-asignar.component';

describe('MenuRolAsignarComponent', () => {
  let component: MenuRolAsignarComponent;
  let fixture: ComponentFixture<MenuRolAsignarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRolAsignarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRolAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
