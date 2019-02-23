import { impInterface } from './../models/imp-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service'; 

//Interfaces
import { usuarioImpInterface } from '../models/usuarioimp-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioimpDataService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  public selectedImpUsers: usuarioImpInterface = {
    Ip: '',
    nomeUser: '',
    usuarioId: '',
    id: null
  };

  public selectedImp: impInterface = {
    id: null,
    setor: '',
    ip: '',
    filial: '',
    modelo: ''
  };  

  //Var atend
  uimp: Observable<any>;
  uimps: Observable<any>;

  // ?filter[where][Ip]=${impip}

  getAllUserImp(impip: string){
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/usuarios?filter[where][Ip]=${impip}`;
    return this.http.get<usuarioImpInterface>(url_api);
  }

  updateUserImp(inv){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/usuarios?access_token=${token}`;
    return this.http.put<usuarioImpInterface>(url_api, inv ,{headers: this.headers})
    .pipe(map(data => data));
  }

  saveUserImp(uimp: usuarioImpInterface){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/usuarios/?access_token=${token}`;
    return this.http.post<usuarioImpInterface>(url_api, uimp ,{headers: this.headers})
    .pipe(map(data => data));
  }








}
