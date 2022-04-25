import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public logged: any;
  public desc: any;
  public showEdit: boolean = false;
  public showCard: boolean = false;
  public hide = true;

  constructor(private router: Router, private islogged: LoggedService) { }

  ngOnInit(): void {
    this.logged = this.islogged.getVariable();
    this.desc = this.islogged.getDesc();
    if (this.logged){
      const loggedLinks = document.getElementById("logged-home") as HTMLDivElement;
      loggedLinks.style.display = "flex";
    }
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
    const links = document.getElementById("logged-home") as HTMLDivElement;
    links.style.display = "none";
    const logged = document.getElementById("logged") as HTMLDivElement;
    const notLogged = document.getElementById("not-logged") as HTMLDivElement;
    logged.style.display = "none";
    notLogged.style.display = "flex";
    this.islogged.updatedLogged(false);
    this.router.navigate(['']);
  }
  public openEdit() {
    this.showEdit = true;
  }
  public closeEdit() {
    this.showEdit = false;
  }
  public openEditTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showEdit = true;
    }
    if (event.keyCode === 32){
      this.showEdit = true;

    }
  }
  public closeEditTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showEdit = false;
    }
    if (event.keyCode === 32){
      this.showEdit = false;

    }
  }

  public openCard() {
    this.showCard = true;
  }
  public closeCard() {
    this.showCard = false;
  }
  public openCardTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showCard = true;
    }
    if (event.keyCode === 32){
      this.showCard = true;

    }
  }
  public closeCardTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showCard = false;
    }
    if (event.keyCode === 32){
      this.showCard = false;

    }
  }

}

