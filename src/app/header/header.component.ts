import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { changeScroll } from '../../main';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public emailInit:any = new FormControl('', [Validators.required, Validators.email]);
  public emailReg:any = new FormControl('', [Validators.required, Validators.email]);
  public hide = true
  public showLogin: boolean = false;
  public showReg: boolean = false;
  public showBack: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessageEmailInit(){
    if (this.emailInit.hasError('required')) {
      return 'Tiene que introducir su correo';
    }
    return this.emailInit.hasError('email') ? 'Email no válido': '';
  }

  getErrorMessageEmailReg(){
    if (this.emailReg.hasError('required')) {
      return 'Tiene que introducir su correo';
    }
    return this.emailReg.hasError('email') ? 'Email no válido': '';
  }

  public changePath(){
    this.router.navigate(['home']);
  }

  public moveTo(event: KeyboardEvent){
    if (event.key === 'Enter') {
      this.router.navigate(['home']);
    }
    if (event.keyCode === 32) {
      this.router.navigate(['home']);
    }
  }

  public openInit() {
    this.showLogin = true;
    this.showBack = true;
    this.showReg = false;
    this.emailInit.reset('', {emitEvent: false});
    changeScroll(false);

  }

  public closeInit() {
    this.showLogin = false;
    this.showBack = false;
    this.emailInit.reset('', {emitEvent: false});
    changeScroll(true);
  }

  public checkInit() {
    const emailIn = document.getElementById("emailLogin") as HTMLInputElement;
    const contraseñaIn = document.getElementById("contraseñaLogin") as HTMLInputElement;
    if ( emailIn.value === "mariadelcarmen@gmail.com" && contraseñaIn.value === "1234"){
      const divNotLogged = document.getElementById("not-logged") as HTMLDivElement;
      const divLogged = document.getElementById("logged") as HTMLDivElement;
      divNotLogged.style.display = "none";
      divLogged.style.display = "flex"
      this.showLogin = false;
      this.showBack = false;
      this.emailInit.reset('', {emitEvent: false});
      changeScroll(true);
      const loggedLinks = document.getElementById("logged-home") as HTMLDivElement;
      loggedLinks.style.display = "flex";
    }
    else{
      const error = document.getElementById("errorInit") as HTMLParagraphElement;
      error.style.display = "flex";
    }
  }

  public closeInitTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showLogin = false;
      this.showBack = false;
      this.emailInit.reset('', {emitEvent: false});
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showLogin = false;
      this.showBack = false;
      this.emailInit.reset('', {emitEvent: false});
      changeScroll(true);
    }
  }

  public openReg(){
    this.showReg =  true;
    this.showBack = true;
    this.showLogin = false;
    this.emailReg.reset('', {emitEvent: false});
    changeScroll(false);
  }

  public closeReg() {
    this.showReg = false;
    this.showBack = false;
    this.emailReg.reset('', {emitEvent: false});
    changeScroll(true);
  }

  public closeRegTab(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.showReg = false;
      this.showBack = false;
      this.emailReg.reset('', {emitEvent: false});
      changeScroll(true);
    }
    if (event.keyCode === 32){
      this.showReg = false;
      this.showBack = false;
      this.emailReg.reset('', {emitEvent: false});
      changeScroll(true);
    }
  }


}

