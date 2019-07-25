import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service';

//Interface
import { atendimentoInterface } from '../models/atendimento-interface';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoDataService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  //Var atend
  atend: Observable<any>;
  atends: Observable<any>;
  
  public selectedAte: atendimentoInterface = {
    id: null,
    nome: '',
    setor: '',
    chamadoatual: '',
    obs: ''
  };

  getAllAtendimentos(){
    const url_api = 'http://localhost:21181/';
    return this.http.get<atendimentoInterface>(url_api);
  }

  updateAtendimentos(atend){
    console.log(atend)
    const url_api = `http://localhost:21181/${atend.id}`;
    return this.http.put<atendimentoInterface>(url_api, atend ,{headers: this.headers})
    .pipe(map(data => data));
  }


}

