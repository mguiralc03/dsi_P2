import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Medicamento, MedicamentosService } from '../medicamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tramitar',
  templateUrl: './tramitar.component.html',
  styleUrls: ['./tramitar.component.scss']
})
export class TramitarComponent implements OnInit {

  public logged: any;
  public desc: any;
  public medicamentos: Array<Medicamento> = [];

  constructor(private router: Router, private islogged: LoggedService, private listaMed: MedicamentosService) { }

  ngOnInit(): void {
    this.medicamentos = this.listaMed.getMedicamentos();
    this.logged = this.islogged.getVariable();
    this.desc = this.islogged.getDesc();
    if (this.logged){
      const loggedLinks = document.getElementById("logged-home") as HTMLDivElement;
      loggedLinks.style.display = "flex";
    }
    if (this.desc){
      const descript = document.getElementById("descripcionVoz") as HTMLInputElement;
      descript.checked = this.desc;
    }
  }

  public changeDesc(){
    this.desc = !this.desc;
    const descript = document.getElementById("descripcionVoz") as HTMLInputElement;
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
