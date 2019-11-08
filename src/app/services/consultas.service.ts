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

   
  public produto = {
    codigo: '',
    codbar: '',
    descricao: '',
    fornecedor: '', 
    estoqlj: '',
    estoqcd: '',
    estoqdep:''
  };  

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

  getDetail(prod, coduser, filial){
    let  url_chico = `http://192.168.0.13:9191/rest/PRODUTO/CONSULTA?CODUSER=${coduser}&APP=LIBCOM&CHAVEBUSCA=${prod.B1_CODBAR}&CODFILIAL=${filial}`
      return this.http.get(url_chico)
      .pipe(map(data => data));
  }

  getprod(prod, coduser){
    /* Consulta Chico
    let url_chico; 
      if(!isNullOrUndefined(prod.Cbarras)){
        url_chico = `http://192.168.0.13:9191/rest/PRODUTO/CONSULTA?CODUSER=${coduser}&APP=LIBCOM&CHAVEBUSCA=${prod.Cbarras}&CODFILIAL=${prod.filial}`
        prod.Cbarras = [];
      }else if(!isNullOrUndefined(prod.Cprotheus)){
        url_chico = `http://192.168.0.13:9191/rest/PRODUTO/CONSULTA?CODUSER=${coduser}&APP=LIBCOM&CHAVEBUSCA=${prod.Cprotheus}&CODFILIAL=${prod.filial}`
        prod.Cprotheus = [];
      }else if (!isNullOrUndefined(prod.Dproduto)){
        url_chico = `http://192.168.0.13:9191/rest/PRODUTO/CONSULTA?CODUSER=${coduser}&APP=LIBCOM&CHAVEBUSCA=${prod.Dproduto}&CODFILIAL=${prod.filial}`
        prod.Dproduto = [];
      }
      return this.http.get(url_chico)
      .pipe(map(data => data));*/

      if(isNullOrUndefined(prod.Cbarras)){
        prod.Cbarras = [];
      }
      if(isNullOrUndefined(prod.Cprotheus)){
        prod.Cprotheus = [];
      }
      if (isNullOrUndefined(prod.Dproduto)){
        prod.Dproduto = [];
      }

      const url_api = `${this.global_api}/api/ocl/prod`;
      return this.http.post(url_api, prod ,{headers: this.headers})
      .pipe(map(data => data));    
  }


}
