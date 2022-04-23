import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  public logged: boolean = false;
  public descripVoz: boolean = true;
  constructor() { }

  getVariable(){
    return this.logged;
  }

  getDesc(){
    return this.descripVoz;

  }

  updatedDesc(value: boolean){
    this.descripVoz = value
  }

  updatedLogged(value: boolean){
    this.logged = value;
  }
}
