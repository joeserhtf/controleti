import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


//Auth
import { AuthService } from './auth.service';

//Interface
import { LojaInterface } from './../models/loja-interface';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LojaServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public sl10 = [];
  
  global_api = this.authService.global_api;
  
  public selectedloja: LojaInterface = {
    id: null,
    unidade: '',
    cxatu: '',
    quantcx: null,
    lstatus: 0
  };

  getAllUnidades(){
    const url_api = `${this.global_api}/api/uni/`;
    return this.http.get(url_api);
  }

  getAllStatus(){
    const url_api = `${this.global_api}/api/ocl`;
    return this.http.get(url_api);
  }

  updateUnidades(loja){    
    if(!isNullOrUndefined(loja.id)){
      const url_api = `${this.global_api}/api/uni/${loja.id}`;
      return this.http.put<LojaInterface>(url_api, loja ,{headers: this.headers})
      .pipe(map(data => data));
    }else{
      const url_api = `${this.global_api}/api/uni/all/1`;
      return this.http.put<LojaInterface>(url_api, loja ,{headers: this.headers})
      .pipe(map(data => data));
    }
  }

  updateStatus(loja){
    const url_api = `${this.global_api}/api/uni/s/${loja.id}`;
    return this.http.put<LojaInterface>(url_api, loja ,{headers: this.headers})
    .pipe(map(data => data));
  }

}
