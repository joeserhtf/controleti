import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service';

//Interface
import { projetosInterface } from './../models/projetos-interface';


@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });


  public projetos: projetosInterface = {
    id: '',
    mensagem: ''
  };


  getAllProjetos(){
    const url_api = 'https://carajas-tic-dashboard.mybluemix.net/api/timesheets';
    return this.http.get<projetosInterface>(url_api);
  }

  //?filter[where][and][0][userid]=1&filter[where][and][1][ano]=2019

  getDaysByYearAndMonth(userid ,ano, mes){
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/timesheets?filter[where][and][0][userid]=${userid}&filter[where][and][1][ano]=${ano}&filter[where][and][2][mes]=${mes}`;
    return this.http.get<projetosInterface>(url_api);
  }

  updateDay(ts){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/timesheets?access_token=${token}`;
    return this.http.put<projetosInterface>(url_api, ts ,{headers: this.headers})
    .pipe(map(data => data));
  }












}
