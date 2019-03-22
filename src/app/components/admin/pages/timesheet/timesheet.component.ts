import { TimesheetService } from './../../../../services/timesheet.service';
import { Time } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from './../../../../models/user-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { portugues } from './../../../../../interfaces/datatables.es';
import { Subject, Observable } from 'rxjs';
import * as moment from "moment";
import { Horariointerface } from './../../../../models/horario-interface';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {

  tt: number;
  range = [];
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();
  array = [0, 1, 2, 3]

  public horario: Horariointerface = {
    userid: 0,
    ano: 0,
    mes: 0,
    dia: 0,
    total: 0,
    e1: 0,
    s1: 0,
    e2: 0,
    s2: 0,
    e3: 0,
    s3: 0,
    obs: ''
  };

  selectedMonth: number;
  selectedYear: number;

  months = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 }
  ]

  years = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 }
  ]


  // sd = moment().startOf('month').add(1, 'days').locale('pt-br').format('dddd');


  fd = moment().startOf('month').locale('pt-br').format('dddd');
  nuss: number;
  i: number;
  user: UserInterface;
  year = moment().locale('pt-br').format('YYYY');
  month = moment().locale('pt-br').format('MMMM');
  public days: Horariointerface;
  constructor(private http: HttpClient, private authService: AuthService, private timesheetService: TimesheetService) { }


  mesDias() {
    for (var i = 1; i <= moment("02022019", "DDMMYYYY").daysInMonth(); i++) {
      this.range.push(i);
    }
  }

  diames(i: number) {
    return moment().startOf('month').locale('pt-br').add(`${i}`, 'days').format('dddd');
  }

  getDays(dia): void {
    this.timesheetService.getDaysByMonth(dia).subscribe((days: Horariointerface) => {
      this.days = days;
    });
  }

  mudou(id){
    console.log(id);
  }

  reload(){
      location.reload();
  }

  UpdateDay(day: Horariointerface) {
    this.timesheetService.updateDay(day).subscribe(sc => setTimeout(() => {
      location.reload();
    }, 1000));
  }

  ngOnInit() {
    this.mesDias();
    this.user = this.authService.getCurrentUser();
    this.month;
    this.year;
    this.fd;
  }

}
