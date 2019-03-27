import { AuthService } from './../../../../services/auth.service';
import { Horariointerface } from './../../../../models/horario-interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent, FullCalendarModule } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { UserInterface } from 'src/app/models/user-interface';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  user: UserInterface;
  public days;
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

  constructor(private http: HttpClient, private route: ActivatedRoute, private timesheetService: TimesheetService,  private authService: AuthService) { }

  getDaysUser(): void {
    this.timesheetService.getDaysByUser(this.user.idt).subscribe((days: Horariointerface) => {
      this.days = days;
    });
  }


  ngOnInit() {
    //  this.getEventsCalendarRest().subscribe(data => {
    //      this.events = <any>data
    //  })     
    this.user = this.authService.getCurrentUser();

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
