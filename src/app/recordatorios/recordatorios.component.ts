import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core'
import esLocale from '@fullcalendar/core/locales/es';
import { LoggedService } from '../logged.service';
import { changeScroll } from '../../main';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss']
})
export class RecordatoriosComponent implements OnInit {

  public desc: any;
  selectedColor: string = "#3334F6";
  EventsList: EventInput[] = [];

  constructor(private router: Router, private islogged: LoggedService) { }

  ngOnInit(): void {
    this.desc = this.islogged.getDesc();
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

  public openAdd(){
    const back = document.getElementById("backblur") as HTMLDivElement
    back.style.display = "flex";
    const addEvent = document.getElementById("add-event") as HTMLDivElement
    addEvent.style.display = "flex";
    changeScroll(false);
  }

  public addRecord(e: any){
    e.preventDefault();
    const fechai = document.getElementById("fecha-inicio") as HTMLInputElement
    const fechaf = document.getElementById("fecha-fin") as HTMLInputElement
    const hora = document.getElementById("hora-escogida") as HTMLInputElement
    const med = document.getElementById("medNombre") as HTMLInputElement
    const dosis = document.getElementById("dosis") as HTMLInputElement
    const colorToChoose = this.selectedColor
    if (fechai.value === "" || fechaf.value === ""){
      alert("Tienes que aportar un medicamento y una dosis")
      this.closeAdd()
    } else {
      let formatFechai = fechai.value.split("/").reverse()
      let formatFechaf = fechaf.value.split("/").reverse()
      console.log(formatFechai, formatFechaf)
      let pmhora = hora.value.split(" ")
      let startHora = ""
      let endHora = ""
      if (pmhora[1] === "AM"){
        startHora = pmhora[0]
        let format = pmhora[0].split(":")
        if (+pmhora[0].split(":")[1] < 30){
          if (+format[0] < 10){
            format[0] = "0" + format[0]
          }
          startHora = format[0] + ":" + format[1]
          endHora = format[0] + ":" + (+format[1] + 30).toString()
        } else {
          startHora = format[0] + ":" + format[1]
          endHora = (+format[0] + 1).toString() + ":" + ((+format[1] + 30) % 60).toString()
        }
      }
      if (pmhora[1] === "PM"){
        startHora = pmhora[0]
        let format = pmhora[0].split(":")
        if (+pmhora[0].split(":")[1] < 30) {
          startHora = (+format[0] + 12).toString() + ":" + format[1]
          endHora = (+format[0] + 12).toString() + ":" + (+format[1] + 30).toString()
        } else {
          startHora = (+format[0] + 12).toString() + ":" + format[1]
          endHora = (+format[0] + 13).toString() + ":" + ((+format[1] + 30) % 60).toString()
        }
      }

      if (formatFechai[1].length === 1){
        formatFechai[1] = "0" + formatFechai[1]
      }

      if (formatFechai[2].length === 1) {
        formatFechai[2] = "0" + formatFechai[2]
      }

      if (formatFechaf[1].length === 1) {
        formatFechaf[1] = "0" + formatFechaf[1]
      }

      if (formatFechaf[2].length === 1) {
        formatFechaf[2] = "0" + formatFechaf[2]
      }

      let addevent = {title: med.value, editable: true, rrule:{ freq:'daily', dtstart: formatFechai.join("-") + "T" + startHora + ":00", until: formatFechaf.join("-") + "T" + endHora + ":00"}, color: colorToChoose, extendedProps: { dosis: dosis.value, hora: startHora }}
      this.EventsList.push(addevent)
      this.EventsList = Object.assign([], this.EventsList)
      this.calendarOptions.events = this.EventsList
      
    }
    changeScroll(true);
    this.closeAdd()
  }

  public closeAdd(){
    const back = document.getElementById("backblur") as HTMLDivElement
    back.style.display = "none";
    const addEvent = document.getElementById("add-event") as HTMLDivElement
    addEvent.style.display = "none";
    changeScroll(true);
  }

  public closeAddTab(event: KeyboardEvent){
    if (event.key === 'Enter') {
      const back = document.getElementById("backblur") as HTMLDivElement
      back.style.display = "none";
      const addEvent = document.getElementById("add-event") as HTMLDivElement
      addEvent.style.display = "none";
      changeScroll(true);
    }
    if (event.keyCode === 32) {
      const back = document.getElementById("backblur") as HTMLDivElement
      back.style.display = "none";
      const addEvent = document.getElementById("add-event") as HTMLDivElement
      addEvent.style.display = "none";
      changeScroll(true);
    }
  }

  public alertar(info: string){
    alert(info);
  }

  public closeShow() {
    const back = document.getElementById("backblur-event") as HTMLDivElement
    back.style.display = "none";
    const addEvent = document.getElementById("show-event") as HTMLDivElement
    addEvent.style.display = "none";
    changeScroll(true);
    const dosis = document.getElementById("event-dosis") as HTMLElement
    dosis.innerHTML = "La dosis es "
    const hora = document.getElementById("event-hora") as HTMLElement
    hora.innerHTML = "Debe tomarlo a la(s) "
  }

  public closeShowTab(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const back = document.getElementById("backblur-event") as HTMLDivElement
      back.style.display = "none";
      const addEvent = document.getElementById("show-event") as HTMLDivElement
      addEvent.style.display = "none";
      changeScroll(true);
    }
    if (event.keyCode === 32) {
      const back = document.getElementById("backblur-event") as HTMLDivElement
      back.style.display = "none";
      const addEvent = document.getElementById("show-event") as HTMLDivElement
      addEvent.style.display = "none";
      changeScroll(true);
    }
    const dosis = document.getElementById("event-dosis") as HTMLElement
    dosis.innerHTML = "La dosis es "
    const hora = document.getElementById("event-hora") as HTMLElement
    hora.innerHTML = "Debe tomarlo a la(s) "
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
    events: this.EventsList,
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short'
    },
    dayMaxEventRows: true,
    aspectRatio: 1.2,
    navLinks: true,
    weekNumbers: true,
    weekText: "Sem ",
    selectable: true,
    nowIndicator: true,
    editable: true,
    eventClick: function (info) {
      changeScroll(false);
      const back = document.getElementById("backblur-event") as HTMLDivElement
      back.style.display = "flex";
      const addEvent = document.getElementById("show-event") as HTMLDivElement
      addEvent.style.display = "flex";
      const title = document.getElementById("event-title") as HTMLElement
      title.innerHTML = info.event.title
      const dosis = document.getElementById("event-dosis") as HTMLElement
      dosis.innerHTML += " " + info.event.extendedProps['dosis']
      const hora = document.getElementById("event-hora") as HTMLElement
      hora.innerHTML += " " + info.event.extendedProps['hora']
    },
    select: function (info) {
      changeScroll(false);
      const back = document.getElementById("backblur") as HTMLDivElement
      back.style.display = "flex";
      const addEvent = document.getElementById("add-event") as HTMLDivElement
      addEvent.style.display = "flex";
      const fechai = document.getElementById("fecha-inicio") as HTMLInputElement
      const fechaf = document.getElementById("fecha-fin") as HTMLInputElement
      const hora = document.getElementById("hora-escogida") as HTMLInputElement
      if (info.allDay){
        let formating = info.startStr.split("-").reverse().join("/")
        fechai.value = formating
        formating = info.endStr.split("-").reverse().join("/")
        fechaf.value = formating
      } else {
        let startDate = info.startStr.split("T")
        let formating = startDate[0].split("-").reverse().join("/")
        fechai.value = formating
        let endDate = info.endStr.split("T")
        formating = endDate[0].split("-").reverse().join("/")
        fechaf.value = formating
        let hour = startDate[1].split(":")
        if (+hour[0] <= 12){
          formating = hour[0] + ":" + hour[1] + " AM"
          hora.value = formating
        } else {
          formating = (+hour[0] - 12).toString() + ":" + hour[1] + " PM"
          hora.value = formating
        }
      }
    }
  };

  public cerrarSesion() {
    let confirmation = confirm("Seguro que quieres cerrar sesi??n?");
    if (confirmation) {
      const logged = document.getElementById("logged") as HTMLDivElement;
      const notLogged = document.getElementById("not-logged") as HTMLDivElement;
      logged.style.display = "none";
      notLogged.style.display = "flex";
      this.islogged.updatedLogged(false);
      this.router.navigate(['']);
    }
  }

}

