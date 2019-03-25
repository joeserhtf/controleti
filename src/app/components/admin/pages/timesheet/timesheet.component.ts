import { ExcelService } from './../../../../services/shared/excel.service';
import { TimesheetService } from './../../../../services/timesheet.service';
import { Time, NgForOf } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from './../../../../models/user-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { portugues } from './../../../../../interfaces/datatables.es';
import { Subject, Observable, empty } from 'rxjs';
import * as moment from "moment";
import { Horariointerface } from './../../../../models/horario-interface';
import { isNullOrUndefined, isNull } from 'util';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {

  tt: number;
  range = [];
  array = [0, 1, 2, 3]

  public horario: Horariointerface = {
    userid: 0,
    ano: 0,
    mes: 0,
    dia: 0,
    total: 0,
    e1: null,
    s1: 0,
    e2: 0,
    s2: 0,
    e3: 0,
    s3: 0,
    obs: ''
  };

  selectedMonth = "03";
  selectedYear = 2019;

  months = [
    { value: "01" },
    { value: "02" },
    { value: "03" },
    { value: "04" },
    { value: "05" },
    { value: "06" },
    { value: "07" },
    { value: "08" },
    { value: "09" },
    { value: 10 },
    { value: 11 },
    { value: 12 },
  ]

  years = [
    { value: 2019 },
    { value: 2020 }
  ]


  // sd = moment().startOf('month').add(1, 'days').locale('pt-br').format('dddd');

  data: Horariointerface;
  fd = moment().startOf('month').locale('pt-br').format('dddd');
  nuss: number;
  i: number;
  user: UserInterface;
  year = moment().locale('pt-br').format('YYYY');
  month = moment().locale('pt-br').format('MMMM');
  public days;
  test;
  constructor(private http: HttpClient, private authService: AuthService, private timesheetService: TimesheetService, private excelService: ExcelService) { }

  mesDias() {
    for (var i = 1; i <= moment("02022019", "DDMMYYYY").daysInMonth(); i++) {
      this.range.push(i);
    }
  }

  log(){
    console.log(this.test);
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.days, 'sample');
  }

  diames(ano: number, mes: number, i: number) {
    return moment(`${ano}${mes}01`, "YYYYMMDD").startOf('month').locale('pt-br').add(`${i}`, 'days').format('dddd');
  }

  getDays(): void {
    this.timesheetService.getDaysByYearAndMonth(this.user.idt ,this.selectedYear, this.selectedMonth).subscribe((days: Horariointerface) => {
      this.days = days;
    });
  }

  reload(){
      location.reload();
  }

  UpdateDay(day: Horariointerface) {
    this.timesheetService.updateDay(day).subscribe();
  }

  ngOnInit() {
    this.mesDias();
    this.user = this.authService.getCurrentUser();
    this.month;
    this.year;
    this.fd;
    this.getDays();
  }

}
