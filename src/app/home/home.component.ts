import { Component, OnInit } from '@angular/core';
import { Medicamento, MedicamentosService} from '../medicamentos.service';
import  { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public medicamentos: Array<Medicamento> = [];

  constructor(private listaMed: MedicamentosService) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'fr');
    this.medicamentos = this.listaMed.getMedicamentos();
  }

  public changeFill(id: any, type: string) {
    for (let med of this.medicamentos){
      if (med.id === id){
        if (type === 'fav'){
          if (med.favorite) {
            med.favorite = false;
          } else {
            med.favorite = true;
          }
        }
        if (type === 'shop'){
          if (med.bought) {
            med.bought = false;
          } else {
            med.bought = true;
          }
        }
        
      }
    }
  }

  public search(filtro: string){
    const filtroaplicado = document.getElementById(filtro) as HTMLDivElement;
    filtroaplicado.style.backgroundColor = "#C8FF79";
  }

  public cerrarSesion() {
    const links = document.getElementById("logged-home") as HTMLDivElement;
    links.style.display = "none";
    const logged = document.getElementById("logged") as HTMLDivElement;
    const notLogged = document.getElementById("not-logged") as HTMLDivElement;
    logged.style.display = "none";
    notLogged.style.display = "flex";
  }

}
