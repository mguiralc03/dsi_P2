import { Component, OnInit } from '@angular/core';
import { Medicamento, MedicamentosService} from '../medicamentos.service';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';
import  { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { changeScroll } from 'src/main';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public medicamentos: Array<Medicamento> = [];
  public logged: any;
  public desc: any;
  public filtroBusqueda: string = "";
  public showBack: boolean = false;
  public showPopup: boolean = false;
  public seleccionado: any;

  constructor(private router: Router, private listaMed: MedicamentosService, private islogged: LoggedService) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'fr');
    this.medicamentos = this.listaMed.getMedicamentos();
    this.logged = this.islogged.getVariable();
    this.desc = this.islogged.getDesc();
    if (this.logged){
      const loggedLinks = document.getElementById("logged-home") as HTMLDivElement;
      loggedLinks.style.display = "flex";
    }
    if(this.desc){
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

  public changeFill(id: any, type: string) {
    if (!this.islogged.getVariable()){
      alert("Tienes que iniciar sesion")
    } else {
      for (let med of this.medicamentos){
        if (med.id === id){
          if (type === 'fav'){
            if (med.favorite) {
              med.favorite = false;
              this.listaMed.updateMedicamanto(med);
            } else {
              med.favorite = true;
              this.listaMed.updateMedicamanto(med);
            }
          }
          if (type === 'shop'){
            if (med.bought) {
              med.bought = false;
              med.units = 0;
              this.listaMed.updateMedicamanto(med);
            } else {
              med.bought = true;
              med.units = 1;
              this.listaMed.updateMedicamanto(med);
            }
          }
          
        }
      }
    }
  }

  public changeFillKey(event: KeyboardEvent,id: any, type: string) {
    if (event.key === 'Enter'){
      if (!this.islogged.getVariable()){
        alert("Tienes que iniciar sesion")
      } else {
        for (let med of this.medicamentos){
          if (med.id === id){
            if (type === 'fav'){
              if (med.favorite) {
                med.favorite = false;
                this.listaMed.updateMedicamanto(med);
              } else {
                med.favorite = true;
                this.listaMed.updateMedicamanto(med);
              }
            }
            if (type === 'shop'){
              if (med.bought) {
                med.bought = false;
                med.units = 0;
                this.listaMed.updateMedicamanto(med);
              } else {
                med.bought = true;
                med.units = 1;
                this.listaMed.updateMedicamanto(med);
              }
            }
            
          }
        }
      }
    }
    if (event.keyCode === 32){
      if (!this.islogged.getVariable()){
        alert("Tienes que iniciar sesion")
      } else {
        for (let med of this.medicamentos){
          if (med.id === id){
            if (type === 'fav'){
              if (med.favorite) {
                med.favorite = false;
                this.listaMed.updateMedicamanto(med);
              } else {
                med.favorite = true;
                this.listaMed.updateMedicamanto(med);
              }
            }
            if (type === 'shop'){
              if (med.bought) {
                med.bought = false;
                med.units = 0;
                this.listaMed.updateMedicamanto(med);
              } else {
                med.bought = true;
                med.units = 1;
                this.listaMed.updateMedicamanto(med);
              }
            }
            
          }
        }
      }
    }

  }

  public handleChange(){
    const text = document.getElementById("text_search") as HTMLInputElement
    if (text.value == ""){
      this.filtroBusqueda = "";
    }
  }


  public search(filtro: string){
    var filtroaplicado;
    var checked;

    if (filtro === "farmacia"){
      filtroaplicado = document.getElementById("farmacia") as HTMLDivElement;
      checked = document.getElementById("farmacia_checkbox") as HTMLInputElement;
      if (checked.checked) {filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro;}
      else {filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
    }
    else{
      if (filtro === "parafarmacia"){
        filtroaplicado = document.getElementById("parafarmacia") as HTMLDivElement;
        checked = document.getElementById("parafarmacia_checkbox") as HTMLInputElement;
        if (checked.checked) { filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro; }
        else { filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
      }
      else{
        if (filtro === "ortopedia"){
          filtroaplicado = document.getElementById("ortopedia") as HTMLDivElement;
          checked = document.getElementById("ortopedia_checkbox") as HTMLInputElement;
          if (checked.checked) { filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro; }
          else { filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
        } else {
          const text = document.getElementById("text_search") as HTMLInputElement
          this.filtroBusqueda = text.value
        }
      }
    }  
  }

  public searchKey( event: KeyboardEvent, filtro: string){
    if (event.key === 'Enter'){
      var filtroaplicado;
    var checked;

    if (filtro === "farmacia"){
      filtroaplicado = document.getElementById("farmacia") as HTMLDivElement;
      checked = document.getElementById("farmacia_checkbox") as HTMLInputElement;
      if (checked.checked) {filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro;}
      else {filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
    }
    else{
      if (filtro === "parafarmacia"){
        filtroaplicado = document.getElementById("parafarmacia") as HTMLDivElement;
        checked = document.getElementById("parafarmacia_checkbox") as HTMLInputElement;
        if (checked.checked) { filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro; }
        else { filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
      }
      else{
        if (filtro === "ortopedia"){
          filtroaplicado = document.getElementById("ortopedia") as HTMLDivElement;
          checked = document.getElementById("ortopedia_checkbox") as HTMLInputElement;
          if (checked.checked) { filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro; }
          else { filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
        } else {
          const text = document.getElementById("text_search") as HTMLInputElement
          this.filtroBusqueda = text.value
        }
      }
    }  
    }
    if (event.keyCode === 32){
      var filtroaplicado;
    var checked;

    if (filtro === "farmacia"){
      filtroaplicado = document.getElementById("farmacia") as HTMLDivElement;
      checked = document.getElementById("farmacia_checkbox") as HTMLInputElement;
      if (checked.checked) {filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro;}
      else {filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
    }
    else{
      if (filtro === "parafarmacia"){
        filtroaplicado = document.getElementById("parafarmacia") as HTMLDivElement;
        checked = document.getElementById("parafarmacia_checkbox") as HTMLInputElement;
        if (checked.checked) { filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro; }
        else { filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
      }
      else{
        if (filtro === "ortopedia"){
          filtroaplicado = document.getElementById("ortopedia") as HTMLDivElement;
          checked = document.getElementById("ortopedia_checkbox") as HTMLInputElement;
          if (checked.checked) { filtroaplicado.style.background = "#C8FF79"; this.filtroBusqueda = filtro; }
          else { filtroaplicado.style.background = "#FAFAFA"; this.filtroBusqueda = ""}
        } else {
          const text = document.getElementById("text_search") as HTMLInputElement
          this.filtroBusqueda = text.value
        }
      }
    }  
    }

  }

  public cerrarSesion() {
    let confirmation = confirm("Seguro que quieres cerrar sesión?");
    if (confirmation){
      const links = document.getElementById("logged-home") as HTMLDivElement;
      links.style.display = "none";
      const logged = document.getElementById("logged") as HTMLDivElement;
      const notLogged = document.getElementById("not-logged") as HTMLDivElement;
      logged.style.display = "none";
      notLogged.style.display = "flex";
      this.islogged.updatedLogged(false);
      this.listaMed.restaurar();
      this.router.navigate(['']);
    }
  }

  public abrirPopup(medicamento:any){
    this.seleccionado = medicamento;
    this.showBack = true;
    this.showPopup = true;
    changeScroll(false);
  }

  public closePopup(){
    this.showBack = false;
    this.showPopup = false;
    changeScroll(true);
  }
  public closePopupKeyboard(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showBack = false;
      this.showPopup = false;
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showBack = false;
      this.showPopup = false;
      changeScroll(true);
    }
  }

  public addCarrito(medicamento:any){
    if(this.islogged.getVariable()){
      for (let med of this.medicamentos){
        if (med.title === medicamento){
          med.bought = true;
          med.units = 1;
          this.listaMed.updateMedicamanto(med);
          this.closePopup();
        }
      }
    }
    else{
      this.closePopup();
      alert("Tienes que iniciar sesión");
    }
    
  }

  public addCarritoKey(event: KeyboardEvent, medicamento: any){
    if(this.islogged.getVariable()){
      if (event.key === 'Enter'){
        for (let med of this.medicamentos){
          if (med.title === medicamento){
            med.bought = true;
            med.units = 1;
            this.listaMed.updateMedicamanto(med);
            this.closePopup();
          }
        }
      }
      if (event.keyCode === 32){
        for (let med of this.medicamentos){
          if (med.title === medicamento){
            med.bought = true;
            med.units = 1;
            this.listaMed.updateMedicamanto(med);
            this.closePopup();
          }
        }
      }
    } else {
      this.closePopup();
      alert("Tienes que iniciar sesión");
    }
    
  }


}
