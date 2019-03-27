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
import { add } from 'timelite/time';
import { sub } from 'timelite/time';
import { str } from 'timelite/time';



@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {

  public horario: Horariointerface = {
    userid: 0,
    dia: '',
    data: '',
    total: '',
    e1: '',
    s1: '',
    e2: '',
    s2: '',
    e3: '',
    s3: '',
    obs: ''
  };

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
    { value: '10' },
    { value: '11' },
    { value: '12' },
  ]

  years = [
    { value: '2019' },
    { value: '2020' },
    { value: '2021' }
  ]


  // sd = moment().startOf('month').add(1, 'days').locale('pt-br').format('dddd');
  selectedMonth = "03";
  selectedYear = '2019';
  totalhora;
  data: Horariointerface;
  fd = moment().startOf('month').locale('pt-br').format('dddd');
  i: number;
  user: UserInterface;
  public days;
  constructor(private http: HttpClient, private authService: AuthService, private timesheetService: TimesheetService, private excelService: ExcelService) { }

  totalhoras(e1, s1, e2, s2, e3, s3){
    var hora1;
    var hora2;
    var hora3;
    var tots;
    hora1 = sub([s1,e1]);
    hora2 = sub([s2,e2]);
    hora3 = sub([s3,e3]);
    hora1 = str(hora1);
    hora2 = str(hora2);
    hora3 = str(hora3);
    tots = add([hora1, hora2]);
    tots = str(tots);
    tots = add([tots, hora3]);
    this.totalhora = str(tots);
    return this.totalhora;
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.days, 'Timesheet');
  }

  diames(ano: string, mes: string, i: number) {
    return moment(`01${mes}${ano}`, "DDMMYYYY").startOf('month').locale('pt-br').add(`${i}`, 'days').format('dddd');
  }

  getDays(): void {
    this.timesheetService.getDaysByYearAndMonth(this.user.idt ,this.selectedYear, this.selectedMonth).subscribe((days: Horariointerface) => {
      this.days = days;
    });
  }

  UpdateDay(day: Horariointerface) {
    this.timesheetService.updateDay(day).subscribe();
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.fd;
    this.getDays();
  }

}
