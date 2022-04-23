import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss']
})
export class MisPedidosComponent implements OnInit {

  public logged: any;
  public desc: any;

  constructor(private router: Router, private islogged: LoggedService) { }

  ngOnInit(): void {
    this.logged = this.islogged.getVariable();
    this.desc = this.islogged.getDesc();
    if (this.logged){
      const loggedLinks = document.getElementById("logged-home") as HTMLDivElement;
      loggedLinks.style.display = "flex";
    }
    if (this.desc){
      const descript = document.getElementById("descripcionVozPed") as HTMLInputElement;
      descript.checked = this.desc;
    }
  }

  public changeDesc(){
    this.desc = !this.desc;
    const descript = document.getElementById("descripcionVozPed") as HTMLInputElement;
    descript.checked = this.desc;
    this.islogged.updatedDesc(this.desc);
  }

  public cerrarSesion(){
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
