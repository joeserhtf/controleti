import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from './../../../../models/user-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { portugues } from './../../../../../interfaces/datatables.es';
import { Subject, Observable } from 'rxjs';
import * as moment from "moment";

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  nuss: number;
  i: number;
  user: UserInterface;
  year = moment().locale('pt-br').format('YYYY');
  month =moment().locale('pt-br').format('MMMM');

  constructor(private http: HttpClient, private authService: AuthService) { }

  loop(){
    for(this.i = 0;this.i<=10;this.i++) {
      this.nuss = this.nuss+this.i;
    }
    console.log(this.nuss);
  }


  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.month;
    this.year;
  }

}
