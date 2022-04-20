import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public email:any = new FormControl('', [Validators.required, Validators.email]);
  public showLogin: boolean = false;
  public showReg: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage(){
    if (this.email.hasError('required')) {
      return 'Tiene que introducir su correo';
    }
    return this.email.hasError('email') ? 'Email no válido': '';
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
    this.showReg = false;
  }

  public closeInit() {
    this.showLogin = false;
  }

  public openReg(){
    this.showReg =  true;
    this.showLogin = false;
  }

  public closeReg() {
    this.showReg = false;
  }

}

