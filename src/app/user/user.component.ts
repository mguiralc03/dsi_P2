import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';
import { changeScroll } from '../../main';
import { Medicamento, MedicamentosService } from '../medicamentos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public desc: any;
  public showEdit: boolean = false;
  public showCard: boolean = false;
  public showBack: boolean = false;
  public hide = true;

  constructor(private router: Router, private islogged: LoggedService, private listmed: MedicamentosService) { }

  ngOnInit(): void {
    this.desc = this.islogged.getDesc();
    if (this.desc){
      const descript = document.getElementById("descripcionVozUser") as HTMLInputElement;
      descript.checked = this.desc;
    }
  }

  public changeDesc(){
    this.desc = !this.desc;
    const descript = document.getElementById("descripcionVozUser") as HTMLInputElement;
    descript.checked = this.desc;
    this.islogged.updatedDesc(this.desc);
  }

  public cerrarSesion(){
    let confirmation = confirm("Seguro que quieres cerrar sesión?");
    if (confirmation){
      const logged = document.getElementById("logged") as HTMLDivElement;
      const notLogged = document.getElementById("not-logged") as HTMLDivElement;
      logged.style.display = "none";
      notLogged.style.display = "flex";
      this.islogged.updatedLogged(false);
      this.router.navigate(['']);
      this.listmed.restaurar();
      
    }
  }
  public openEdit() {
    this.showEdit = true;
    this.showBack = true;
    changeScroll(false);
  }
  public closeEdit() {
    this.showEdit = false;
    this.showBack = false;
    changeScroll(true);
  }
  public openEditTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showEdit = true;
      this.showBack = true;
      changeScroll(false);
    }
    if (event.keyCode === 32){
      this.showEdit = true;
      this.showBack = true;
      changeScroll(false);

    }
  }
  public closeEditTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showEdit = false;
      this.showBack = false;
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showEdit = false;
      this.showBack = false;
      changeScroll(true);

    }
  }

  public openCard() {
    this.showCard = true;
    this.showBack = true;
    changeScroll(false);
  }
  public closeCard() {
    this.showCard = false;
    this.showBack = false;
    changeScroll(true);
  }
  public openCardTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showCard = true;
      this.showBack = true;
      changeScroll(false);
    }
    if (event.keyCode === 32){
      this.showCard = true;
      this.showBack = true;
      changeScroll(false);

    }
  }
  public closeCardTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showCard = false;
      this.showBack = false;
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showCard = false;
      this.showBack = false;
      changeScroll(true);

    }
  }

}

