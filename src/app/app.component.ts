import { LoginService } from './_service/login.service';
import { MenuService } from './_service/menu.service';
import { Menu } from './_model/menu';
import { Component, OnInit } from '@angular/core';
import { PerfilService } from './_service/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menus: Menu[] = [];
  userName;
  userRoles: any[] = [];
  constructor(
    private menuService: MenuService,
    public loginService: LoginService,
    private perfilService: PerfilService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.menuService.menuCambio.subscribe(data => {
      this.menus = data;
    });
    this.perfilService.perfilCambio.subscribe(response => {
      this.userName = response.usuario;
      this.userRoles = response.roles;
    });
  }  

}
