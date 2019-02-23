import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  calendarOptions: Options;
  events: any[];
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    //  this.getEventsCalendarRest().subscribe(data => {
     //    this.events = <any>data
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
          events: this.events
        };
  }
 
}
