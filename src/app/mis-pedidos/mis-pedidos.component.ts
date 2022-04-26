import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';
import { changeScroll } from 'src/main';
import { Medicamento, MedicamentosService } from '../medicamentos.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss']
})
export class MisPedidosComponent implements OnInit {

  public desc: any;
  public showBack: boolean = false;
  public showSeguimiento: boolean = false;

  constructor(private router: Router, private islogged: LoggedService, private medList: MedicamentosService) { }

  ngOnInit(): void {
    this.desc = this.islogged.getDesc();
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
    let confirmation = confirm("Seguro que quieres cerrar sesión?");
    if (confirmation) {
      const logged = document.getElementById("logged") as HTMLDivElement;
      const notLogged = document.getElementById("not-logged") as HTMLDivElement;
      logged.style.display = "none";
      notLogged.style.display = "flex";
      this.islogged.updatedLogged(false);
      this.router.navigate(['']);
      this.medList.restaurar();
    }
  }

  public closeSeguimiento(){
    this.showBack = false;
    this.showSeguimiento = false;
    changeScroll(true);
  }

  public closeSeguimientoTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack = false;
      this.showSeguimiento = false;
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showBack = false;
      this.showSeguimiento = false;
      changeScroll(true);
    }
  }

  public abrirSeguimiento(){
    this.showBack = true;
    this.showSeguimiento = true;
    changeScroll(false);
  }

  public abrirSeguimientoTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack = true;
      this.showSeguimiento = true;
      changeScroll(false);
    }
    if (event.keyCode === 32){
      this.showBack = true;
      this.showSeguimiento = true;
      changeScroll(false);
    }
    
  }

}
