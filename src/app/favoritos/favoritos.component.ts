import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../logged.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  public logged: any;

  constructor(private router: Router, private islogged: LoggedService) { }

  ngOnInit(): void {
    this.logged = this.islogged.getVariable();
    if (this.logged) {
      const loggedLinks = document.getElementById("logged-home") as HTMLDivElement;
      loggedLinks.style.display = "flex";
    }
  }

  public cerrarSesion() {
    const links = document.getElementById("logged-home") as HTMLDivElement;
    links.style.display = "none";
    const logged = document.getElementById("logged") as HTMLDivElement;
    const notLogged = document.getElementById("not-logged") as HTMLDivElement;
    logged.style.display = "none";
    notLogged.style.display = "flex";
    this.islogged.updatedLogged(false);
    this.router.navigate(['']);
  }

}
