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
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  //Var Sc
  scs: Observable<any>;
  sc: Observable<any>;  
  
  public selectedSc: ScInterface = {
    id: null,
    numeroSC: '',
    produtoID: '',
    quantidadeP: '',
    solicitanteName: '',
    tipoID: '',
    chamadoID: '',
    aprovadorName: '',
    situacaoSC: '',
    filial: ''
  };

  //Metodos Sc
  getallscs(){
    const url_api = 'https://carajas-tic-dashboard.mybluemix.net/api/listas';
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

  //Var Imp
  imps: Observable<any>;
  imp: Observable<any>;
  
  public selectedImp: impInterface = {
    id: null,
    setor: '',
    ip: '',
    filial: '',
    modelo: ''
  };  

  //Metodos Imp
  getallimpressoras(){
    const url_api = 'https://carajas-tic-dashboard.mybluemix.net/api/impressoras';
    return this.http.get<impInterface>(url_api);
  }  

  saveImp(imp: impInterface){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/impressoras?access_token=${token}`;
    return this.http.post<impInterface>(url_api, imp ,{ headers: this.headers})
    .pipe(map(data => data));
  }  

  updateImp(imp: impInterface){
    const impId = imp.id;
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/impressoras/${impId}?access_token=${token}`;
    return this.http.put<impInterface>(url_api, imp,{headers: this.headers})
    .pipe(map(data => data));
  }
  
}