import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

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
  }

  public closeInit() {
    this.showLogin = false;
    this.showBack = false;
    this.emailInit.reset('', {emitEvent: false});
  }

  public openReg(){
    this.showReg =  true;
    this.showBack = true;
    this.showLogin = false;
    this.emailReg.reset('', {emitEvent: false});
  }

  public closeReg() {
    this.showReg = false;
    this.showBack = false;
    this.emailReg.reset('', {emitEvent: false});
  }

}

