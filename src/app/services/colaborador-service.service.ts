import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service';

//Interface
import { colaboradorInterface } from '../models/colaborador-interface';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  col: Observable<any>;
  cols: Observable<any>;

  public SelectCol: colaboradorInterface = {
    id: null,
    unidade: '',
    setor: '',
    cargo: '',
    nome: '',
    contato: '',
    email: ''
  };

  global_api = this.authService.global_api;

  //Metodos Col
  getColaboradores(){
    const url_api = `${this.global_api}/api/colab`;
    return this.http.get<colaboradorInterface>(url_api);
  }

  getUnidades(){
    const url_api = `${this.global_api}/api/colab/u`;
    return this.http.get(url_api);
  }

  getCargos(){
    const url_api = `${this.global_api}/api/colab/c`;
    return this.http.get(url_api);
  } 

  getSetores(){
    const url_api = `${this.global_api}/api/colab/s`;
    return this.http.get(url_api);
  } 

  saveCol(col: colaboradorInterface){
    const url_api = `${this.global_api}/api/colab/`;
    return this.http.post<colaboradorInterface>(url_api, col ,{ headers: this.headers})
    .pipe(map(data => data));
  }  

  updateCol(col: colaboradorInterface){
    const url_api = `${this.global_api}/api/colab/${col.id}`;
    return this.http.put<colaboradorInterface>(url_api, col,{headers: this.headers})
    .pipe(map(data => data));
  }



}
