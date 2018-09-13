import { LoginService } from './_service/login.service';
import { MenuService } from './_service/menu.service';
import { Menu } from './_model/menu';
import { Component, OnInit } from '@angular/core';
import { PerfilService } from './_service/perfil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menus: Menu[] = [];
  userName;
  userRoles: any[] = [];
  constructor(private menuService: MenuService, public loginService: LoginService, private perfilService: PerfilService) {

  }

  ngOnInit() {
    // let tk = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
    // const decodedToken = decode(tk.access_token);
    // console.log(decodedToken);
    this.menuService.menuCambio.subscribe(data => {
      this.menus = data;
    });
    this.perfilService.buscar().subscribe(response => {
      this.userName = response.usuario;
      this.userRoles = response.roles;
    });
  }


}
