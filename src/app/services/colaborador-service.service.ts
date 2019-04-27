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
    email: ''
  };

  //Metodos Col
  getColaboradores(){
    const url_api = 'https://carajas-tic-dashboard.mybluemix.net/api/colaboradores';
    return this.http.get<colaboradorInterface>(url_api);
  }  

  saveCol(col: colaboradorInterface){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/colaboradores?access_token=${token}`;
    return this.http.post<colaboradorInterface>(url_api, col ,{ headers: this.headers})
    .pipe(map(data => data));
  }  

  updateCol(col: colaboradorInterface){
    const colID = col.id;
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/colaboradores/${colID}?access_token=${token}`;
    return this.http.put<colaboradorInterface>(url_api, col,{headers: this.headers})
    .pipe(map(data => data));
  }



}
