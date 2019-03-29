import { AuthService } from './../../../../services/auth.service';
import { Horariointerface } from './../../../../models/horario-interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent, FullCalendarModule } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { UserInterface } from 'src/app/models/user-interface';
import { normalize } from 'timelite/date'
import { str } from 'timelite/date'

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  user: UserInterface;
  public days;
  calendarOptions: Options;
  events = [ ];
  dataseparador = "-";
  datatimeseparador = " ";
  colorE1 = "green";
  colorE2 = "orange";
  colorE3 = "red";

  //{
  // 
  //  Obs: "testss"
  //}


  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private http: HttpClient, private route: ActivatedRoute, private timesheetService: TimesheetService, private authService: AuthService) { }

  getDaysUser(): void {
    this.timesheetService.getDaysByUser(this.user.idt).subscribe((days: Horariointerface) => {
      this.days = days;
    });
    
  }

  getevents() {
    var i = 0;
    this.days.forEach(element => {
      if(!(this.days[i].e1 === "" || this.days[i].e1 === "00:00")){
        this.events.push(
        {
          title: this.days[i].obs,
          start: this.days[i].data + this.dataseparador + this.days[i].dia + this.datatimeseparador + this.days[i].e1,
          end: this.days[i].data + this.dataseparador + this.days[i].dia + this.datatimeseparador + this.days[i].s1,
          color: this.colorE1
        });
      }
      if(!(this.days[i].e2 === "" || this.days[i].e2 === "00:00")){
        this.events.push({
          start: this.days[i].data + this.dataseparador + this.days[i].dia + this.datatimeseparador + this.days[i].e2,
          end: this.days[i].data + this.dataseparador + this.days[i].dia + this.datatimeseparador + this.days[i].s2,
          color: this.colorE2
        });
      }
      if(!(this.days[i].e3 === "" || this.days[i].e3 === "00:00")){
        this.events.push({
          start: this.days[i].data + this.dataseparador + this.days[i].dia + this.datatimeseparador + this.days[i].e3,
          end: this.days[i].data + this.dataseparador + this.days[i].dia + this.datatimeseparador + this.days[i].s3,
          color: this.colorE3
        });
      }
      i++;
    });
  }

  opencalendar(){
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
      timeFormat: 'HH:mm',
      allDayText: '24H',
      buttonText: {
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia"
      },
      views: {
        month: {
          displayEventEnd: true
        }
      },
      height: 600,
      events: this.events
      }
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    
    this.getDaysUser();
    
    setTimeout(() => {
      this.getevents();
      this.opencalendar();
    }, 2000);      
  }

}
