import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service';

//Interface
import { LojaInterface } from './../models/loja-interface';

@Injectable({
  providedIn: 'root'
})
export class LojaServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  //Var atend
  atend: Observable<any>;
  atends: Observable<any>;
  global_api = this.authService.global_api;
  
  public selectedloja: LojaInterface = {
    id: null,
    unidade: '',
    cxatu: '',
    lstatus: 0
  };

  getAllUnidades(){
    const url_api = `${this.global_api}/api/uni/`;
    return this.http.get<LojaInterface>(url_api);
  }

  updateUnidades(loja){
    console.log(loja);
    const url_api = `${this.global_api}/api/uni/${loja.id}`;
    return this.http.put<LojaInterface>(url_api, loja ,{headers: this.headers})
    .pipe(map(data => data));
  }

}
