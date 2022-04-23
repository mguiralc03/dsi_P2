import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es'

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss']
})
export class RecordatoriosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cerrarSesion(){

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
    nowIndicator: true
  };

}
