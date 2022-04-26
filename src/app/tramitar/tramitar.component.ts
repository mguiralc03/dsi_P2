import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Medicamento, MedicamentosService } from '../medicamentos.service';
import { Router } from '@angular/router';
import  { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { changeScroll } from 'src/main';

@Component({
  selector: 'app-tramitar',
  templateUrl: './tramitar.component.html',
  styleUrls: ['./tramitar.component.scss']
})
export class TramitarComponent implements OnInit {

  public desc: any;
  public medicamentos: Array<Medicamento> = [];
  public showFinCompra: boolean = false;
  public showEdDir: boolean = false;
  public showEdTar: boolean = false;
  public showBack: boolean = false;

  constructor(private router: Router, private islogged: LoggedService, private listaMed: MedicamentosService) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'fr');
    this.medicamentos = this.listaMed.getMedicamentos();
    this.desc = this.islogged.getDesc();
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
    let confirmation = confirm("Seguro que quieres cerrar sesión?");
    if (confirmation) {
      const logged = document.getElementById("logged") as HTMLDivElement;
      const notLogged = document.getElementById("not-logged") as HTMLDivElement;
      logged.style.display = "none";
      notLogged.style.display = "flex";
      this.islogged.updatedLogged(false);
      this.router.navigate(['']);
      this.listaMed.restaurar();
    }
  }

  public sumarUnidad(id: number){
    for (let med of this.medicamentos){
      if (med.id === id){
        med.units = med.units + 1;
        this.listaMed.updateMedicamanto(med);
      }
    }
  }

  public sumarUnidadTab(event: KeyboardEvent, id: number){
    if (event.key === 'Enter'){
      for (let med of this.medicamentos){
        if (med.id === id){
          med.units = med.units + 1;
          this.listaMed.updateMedicamanto(med);
        }
      }
    }
    if (event.keyCode === 32){
      for (let med of this.medicamentos){
        if (med.id === id){
          med.units = med.units + 1;
          this.listaMed.updateMedicamanto(med);
        }
      }
    }
  }

  public restarUnidadTab(event: KeyboardEvent, id: number){
    if (event.key === 'Enter'){
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
    if (event.keyCode === 32){
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
    this.showBack= true;
    this.showFinCompra = true;
    this.showEdDir = false;
    this.showEdTar = false;
    changeScroll(false);

  }

  public finalizarCompraTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack= true;
      this.showFinCompra = true;
      this.showEdDir = false;
      this.showEdTar = false;
      changeScroll(false);
    }
    if (event.keyCode === 32){
      this.showBack= true;
      this.showFinCompra = true;
      this.showEdDir = false;
      this.showEdTar = false;
      changeScroll(false);
    }
  }

  public editarTarjeta(){
    this.showBack= true;
    this.showFinCompra = false;
    this.showEdDir = false;
    this.showEdTar = true;
    changeScroll(false);

  }

  public editarTarjetaTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack= true;
      this.showFinCompra = false;
      this.showEdDir = false;
      this.showEdTar = true;
      changeScroll(false);
    }
    if (event.keyCode === 32){
      this.showBack= true;
      this.showFinCompra = false;
      this.showEdDir = false;
      this.showEdTar = true;
      changeScroll(false);
    }
  }

  public editarEntrega(){
    this.showBack = true;
    this.showFinCompra = false;
    this.showEdDir = true;
    this.showEdTar = false;
    changeScroll(false);

  }

  public editarEntregaTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack = true;
      this.showFinCompra = false;
      this.showEdDir = true;
      this.showEdTar = false;
      changeScroll(false);
    }
    if (event.keyCode === 32){
      this.showBack = true;
      this.showFinCompra = false;
      this.showEdDir = true;
      this.showEdTar = false;
      changeScroll(false);
    }
  }

  public closeFC(){
    this.showBack = false;
    this.showFinCompra = false;
    changeScroll(true);

  }

  public closeFCTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack = false;
      this.showFinCompra = false;
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showBack = false;
      this.showFinCompra = false;
      changeScroll(true);
    }
  }

  public closeEdDir(){
    this.showEdDir = false;
    this.showBack = false;
    changeScroll(true);

  }

  public closeEdDirTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showEdDir = false;
      this.showBack = false;
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showEdDir = false;
      this.showBack = false;
      changeScroll(true);
    }
  }

  public closeEdTar(){
    this.showBack = false;
    this.showEdTar = false;
    changeScroll(true);
  }

  public closeEdTarTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack = false;
      this.showEdTar = false;
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showBack = false;
      this.showEdTar = false;
      changeScroll(true);
    }
  }
}
