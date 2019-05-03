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
    datat: '',
    total: '',
    e1: '',
    s1: '',
    e2: '',
    s2: '',
    e3: '',
    s3: '',
    obs: ''
  };

  getAllDays(){
    const url_api = 'http://localhost:21181/api/time';
    return this.http.get<Horariointerface>(url_api);
  }

  //?filter[where][and][0][userid]=1&filter[where][and][1][ano]=2019

  getDaysByUser(userid){
    const url_api = `http://localhost:21181/api/time/my/${userid}`;
    return this.http.get<Horariointerface>(url_api);
  }

  getDaysByUserH(userid){
    const url_api = `http://localhost:21181/api/time/${userid}`;
    return this.http.get<Horariointerface>(url_api);
  }

  getDaysByYearAndMonth(userid ,ano, mes){
    const url_api = `http://localhost:21181/api/time/my/${userid}/${ano}-${mes}`;
    return this.http.get<Horariointerface>(url_api);
  }

  updateDay(ts){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/timesheets?access_token=${token}`;
    return this.http.put<Horariointerface>(url_api, ts ,{headers: this.headers})
    .pipe(map(data => data));
  }
}
