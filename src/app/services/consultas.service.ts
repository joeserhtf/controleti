import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

//Auth
import { AuthService } from './auth.service'; 

@Injectable({
  providedIn: 'root'
})

export class ConsultasService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  global_api = this.authService.global_api;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getcd(rcd){
    const url_api = `${this.global_api}/api/ocl/rcd`;
    return this.http.post(url_api, rcd ,{headers: this.headers})
    .pipe(map(data => data));
  }

  getorc(rcd){
    const url_api = `${this.global_api}/api/ocl/orc`;
    return this.http.post(url_api, rcd ,{headers: this.headers})
    .pipe(map(data => data));
  }

  getprod(prod){
      if(isNullOrUndefined(prod.Dproduto)){
        prod.Dproduto = [];
      }
      if(isNullOrUndefined(prod.Cprotheus)){
        prod.Cprotheus = [];
      }
      if (isNullOrUndefined(prod.Cbarras)){
        prod.Cbarras = [];
      }
      const url_api = `${this.global_api}/api/ocl/prod`;
      return this.http.post(url_api, prod ,{headers: this.headers})
      .pipe(map(data => data));    
  }


}
