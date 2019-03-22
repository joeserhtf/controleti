import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service';

//Interface
import { Horariointerface } from './../models/horario-interface';


@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

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

  getAllDays(){
    const url_api = 'https://carajas-tic-dashboard.mybluemix.net/api/timesheets';
    return this.http.get<Horariointerface>(url_api);
  }

  getDaysByMonth(dia){
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/timesheets?filter[where][mes]=${dia}`;
    return this.http.get<Horariointerface>(url_api);
  }

  updateDay(ts){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/timesheets?access_token=${token}`;
    return this.http.put<Horariointerface>(url_api, ts ,{headers: this.headers})
    .pipe(map(data => data));
  }
}
