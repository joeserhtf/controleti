import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from './../../../../models/user-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { portugues } from './../../../../../interfaces/datatables.es';
import { Subject, Observable } from 'rxjs';
import moment = require('moment');

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  m = moment();
  year: number;
  user: UserInterface;
  data: Date;
  monthnames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  month: string;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getdate(){
    this.data = new Date;
    return this.data.getMonth();
  }

  monthName(){
    return this.monthnames[this.getdate()];
  }

  getyear(){
    return this.data.getFullYear();
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.month = this.monthName();
    this.year = this.getyear();
    this.m.toISOString();
  }

}
