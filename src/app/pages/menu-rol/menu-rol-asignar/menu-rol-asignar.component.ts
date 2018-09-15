import { RolService } from './../../../_service/rol.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MenuRolService } from '../../../_service/menu-rol.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Rol } from '../../../_model/rol';

@Component({
  selector: 'app-menu-rol-asignar',
  templateUrl: './menu-rol-asignar.component.html',
  styleUrls: ['./menu-rol-asignar.component.css']
})
export class MenuRolAsignarComponent implements OnInit {
  id: number;
  form: FormGroup;
  rolesActuales: Rol[] = [];
  allRoles: Rol[] = [];
  rol: Rol;
  constructor(private menuRolService: MenuRolService, private rolService: RolService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadDataForm();
    });
  }

  initForm() {
    this.form = this.formBuilder.group({
      idMenu: [null],
      nombre: [null],
      roles: this.formBuilder.array([], Validators.compose([]))
    });
  }

  addDetalleFormControl(): FormGroup {
    const formGroup = this.formBuilder.group({
      idRol: [null, Validators.compose([Validators.required])],
      nombre: [null, Validators.compose([Validators.maxLength(20)])]
    });
    this.roles.push(formGroup);
    return formGroup;
  }

  removeDetalleFormControl(index) {
    this.roles.removeAt(index);
  }

  private loadDataForm() {
    this.menuRolService.listarPorId(this.id).subscribe(data => {
      this.form.patchValue({ idMenu: data.idMenu, nombre: data.nombre });
      this.rolesActuales = data.roles;
    });
    this.rolService.listar().subscribe(data => {
      this.allRoles = data;
    });
  }

  changeRol(data) {
    this.rol = data;
  }

  agregar() {
    if (this.rol) {
      const formGroup = this.addDetalleFormControl();
      formGroup.patchValue(this.rol);
      this.rol = null;
    }
  }

  get roles(): FormArray {
    return this.form.get('roles') as FormArray;
  }
}
