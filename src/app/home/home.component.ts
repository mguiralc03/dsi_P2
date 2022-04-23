import { Component, OnInit } from '@angular/core';
import { Medicamento, MedicamentosService} from '../medicamentos.service';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';
import  { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public medicamentos: Array<Medicamento> = [];
  public logged: any;
  public desc: any;

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

  public search(filtro: string){
    var filtroaplicado;
    var checked;

    if (filtro === "farmacia"){
      filtroaplicado = document.getElementById("farmacia") as HTMLDivElement;
      checked = document.getElementById("farmacia_checkbox") as HTMLInputElement;
    }
    else{
      if (filtro === "parafarmacia"){
        filtroaplicado = document.getElementById("parafarmacia") as HTMLDivElement;
        checked = document.getElementById("parafarmacia_checkbox") as HTMLInputElement;
      }
      else{
          filtroaplicado = document.getElementById("ortopedia") as HTMLDivElement;
          checked = document.getElementById("ortopedia_checkbox") as HTMLInputElement;
      }
    }

    console.log(checked.checked);
    if (checked.checked){
      filtroaplicado.style.background = "#C8FF79";
  
    }
    else{
      filtroaplicado.style.background = "#FAFAFA";
      
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
