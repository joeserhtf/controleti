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
    atendente: '',
    local: '',
    chamado: '',
    mensagem: ''
  };

  getAllAtendimentos(){
    const url_api = 'https://carajas-tic-dashboard.mybluemix.net/api/atendimentos';
    return this.http.get<atendimentoInterface>(url_api);
  }

  updateAtendimentos(atend){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/atendimentos?access_token=${token}`;
    return this.http.patch<atendimentoInterface>(url_api, atend ,{headers: this.headers})
    .pipe(map(data => data));
  }






}

