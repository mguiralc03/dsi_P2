import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss']
})
export class RecordatoriosComponent implements OnInit {

  showAdd: boolean = true;
  showEvent: boolean = false;
  showBack: boolean = true;
  selectedEvent: any;
  public logged: any;
  public desc: any;

  constructor(private router: Router, private islogged: LoggedService) { }

  ngOnInit(): void {
    this.logged = this.islogged.getVariable();
    this.desc = this.islogged.getDesc();
    if (this.logged) {
      const loggedLinks = document.getElementById("logged-home") as HTMLDivElement;
      loggedLinks.style.display = "flex";
    }
    if (this.desc){
      const descript = document.getElementById("descripcionVozRec") as HTMLInputElement;
      descript.checked = this.desc;
    }
  }

  public changeDesc(){
    this.desc = !this.desc;
    const descript = document.getElementById("descripcionVozRec") as HTMLInputElement;
    descript.checked = this.desc;
    this.islogged.updatedDesc(this.desc);
  }


  public addRecord(){
    console.log("Hola");
  }

  public closeAdd(){
    console.log("Hola");
  }

  public closeAddTab(event: KeyboardEvent){
    console.log("Hola");
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale,
    headerToolbar: {
      start: 'title',
      center: 'dayGridMonth,timeGridWeek,timeGridDay',
      end: 'today prev,next'
    },
    titleFormat: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    aspectRatio: 1.2,
    navLinks: true,
    weekNumbers: true,
    weekText: "Sem ",
    selectable: true,
    nowIndicator: true,
    editable: true
  };

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
