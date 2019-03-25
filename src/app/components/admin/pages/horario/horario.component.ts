import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent, FullCalendarModule } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  calendarOptions: Options;
  events = [
    {
      title: "test",
      start: "2019-03-24 06:00:00",
      end: "2019-03-24 11:00:00",
      Obs: "testss"
    },
  ];
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }



  ngOnInit() {
    //  this.getEventsCalendarRest().subscribe(data => {
    //      this.events = <any>data
    //  })     

    this.calendarOptions = {
      locale: 'pt-br',
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      columnFormat: 'ddd D/M',
      timeFormat: 'h:mm',
      allDayText: '24H',
      buttonText: {
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia"
      },
      height: 600,
      events: this.events
    };
  }

}
