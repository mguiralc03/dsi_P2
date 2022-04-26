import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../logged.service';
import { MedicamentosService, Medicamento } from '../medicamentos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  public desc: any;
  public listaMedicamentos: Array<Medicamento> = [];

  constructor(private router: Router, private islogged: LoggedService, private medicamentos: MedicamentosService) { }

  ngOnInit(): void {
    this.listaMedicamentos = this.medicamentos.getMedicamentos()
    this.desc = this.islogged.getDesc();
    if (this.desc){
      const descript = document.getElementById("descripcionVozPed") as HTMLInputElement;
      descript.checked = this.desc;
    }
  }

  public quitarFav(id: any){
    for (let med of this.listaMedicamentos){
      if (med.id === id){
        med.favorite = false
        this.medicamentos.updateMedicamanto(med)
      }
    }
  }

  public anadirCarrito(id: any){
    for (let med of this.listaMedicamentos){
      if (med.id === id){
        med.bought = true
        med.units = 1
        this.medicamentos.updateMedicamanto(med)
        alert("Medicamento añadido al carrito")
      }
    }
  }

  public changeDesc(){
    this.desc = !this.desc;
    const descript = document.getElementById("descripcionVozPed") as HTMLInputElement;
    descript.checked = this.desc;
    this.islogged.updatedDesc(this.desc);
  }

  public cerrarSesion() {
    let confirmation = confirm("Seguro que quieres cerrar sesión?");
    if (confirmation) {
      const logged = document.getElementById("logged") as HTMLDivElement;
      const notLogged = document.getElementById("not-logged") as HTMLDivElement;
      logged.style.display = "none";
      notLogged.style.display = "flex";
      this.islogged.updatedLogged(false);
      this.router.navigate(['']);
      this.medicamentos.restaurar();
    }
  }

}
