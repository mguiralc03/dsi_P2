import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Medicamento, MedicamentosService } from '../medicamentos.service';
import { Router } from '@angular/router';
import  { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

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
    registerLocaleData(localeFr, 'fr');
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

  public sumarUnidad(id: number){
    for (let med of this.medicamentos){
      if (med.id === id){
        med.units = med.units + 1;
        this.listaMed.updateMedicamanto(med);
      }
    }
  }

  public restarUnidad(id: number){
    for (let med of this.medicamentos){
      if (med.id === id){
        if (med.units > 0){
          med.units = med.units - 1;
          this.listaMed.updateMedicamanto(med);
        }
        if(med.units === 0){
          med.units = 0;
          med.bought = false;
          this.listaMed.updateMedicamanto(med);
        }
      }
    }
  }

  public FinalizarCompra(){

  }

  public editarTarjeta(){

  }

  public editarEntrega(){

  }

  public closeFC(){

  }

  public closeEdDir(){

  }

  public closeEdTar(){

  }

}
