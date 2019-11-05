import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service'; 

//Interfaces
import { ScInterface } from '../models/sc-interface';
import { impInterface } from '../models/imp-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  global_api = this.authService.global_api;
  
  //Var Imp
  imps: Observable<any>;
  imp: Observable<any>;
  
  public selectedImp: impInterface = {
    id: null,
    setor: '',
    ip: '',
    unidade: '',
    modelo: ''
  };  

  //Metodos Imp
  getallimpressoras(){
    const url_api = `${this.global_api}/api/data/`;
    return this.http.get<impInterface>(url_api);
  }  

  saveImp(imp: impInterface){
    const url_api = `${this.global_api}/api/data/`;
    return this.http.post<impInterface>(url_api, imp ,{ headers: this.headers})
    .pipe(map(data => data));
  }  
  
  updateImp(imp: impInterface){
    const url_api = `${this.global_api}/api/data/`;
    return this.http.put<impInterface>(url_api, imp,{headers: this.headers})
    .pipe(map(data => data));
  }
  

  getRCD(rcd){
    const url_api = `${this.global_api}/api/ocl/`;
    console.log('asd')
    this.scs = this.http.get<any>(url_api)
    //return fetch(url_api, { headers: this.headers });
  }

  //Codigo abaixo era ultilizados para SC. Não fazer mais uso!


  //Var Sc
  scs: Observable<any>;
  sc: Observable<any>;  
  
  public selectedSc: ScInterface = {
    id: null,
    numerosc: null,
    solicitante: null,
    tipo: null,
    chamado: null,
    aprovador: null,
    situacao: null,
    filial: ''
  };

  //Metodos Sc
  getallscs(){ 
    const url_api = `${this.global_api}/api/sc`;
    return this.http.get<ScInterface>(url_api);
  }
  
  getScById(id: string){
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/listas/${id}`;
    return ( this.sc = this.http.get(url_api));
  }
  
  getSituacao(){
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/listas?filter[where][situacaoSC]=0`;
    return ( this.scs = this.http.get(url_api));
  }

  saveSc(sc: ScInterface){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/listas/?access_token=${token}`;
    return this.http.post<ScInterface>(url_api, sc ,{headers: this.headers})
    .pipe(map(data => data));
  }

  updateSc(sc){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/listas/?access_token=${token}`;
    return this.http.put<ScInterface>(url_api, sc ,{headers: this.headers})
    .pipe(map(data => data));
  }

  deleteSc(id: string){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/listas/${id}?access_token=${token}`;
    return this.http.delete<ScInterface>(url_api, { headers: this.headers })
    .pipe(map(data => data));    
  }

}