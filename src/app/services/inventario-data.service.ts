import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Auth
import { AuthService } from './auth.service'; 

//Interfaces
import { inventarioInterface } from '../models/inventario-interface';
import { mensagemInterface } from '../models/mensagem-Interface';

@Injectable({
  providedIn: 'root'
})

export class InventarioDataService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  //Var atend
  inv: Observable<any>;
  invs: Observable<any>;

  public selectedItem: inventarioInterface = {
    id: null,
    item: '',
    quantidade: 0 
  };
  
  public mensagem: mensagemInterface = {
    id: null,
    itemid: '',
    mensagem: null,
    data: ''
  };
  
  getAllInventario(){
    const url_api = 'https://carajas-tic-dashboard.mybluemix.net/api/inventarios';
    return this.http.get<inventarioInterface>(url_api);
  }

  deleteItem(id: string){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/inventarios/${id}?access_token=${token}`;
    return this.http.delete<inventarioInterface>(url_api, { headers: this.headers })
    .pipe(map(data => data));    
  }

  updateInventario(inv: inventarioInterface){
    const invId = inv.id;
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/inventarios/${invId}?access_token=${token}`;
    return this.http.put<inventarioInterface>(url_api, inv,{headers: this.headers})
    .pipe(map(data => data));
  }

  saveItem(inv: inventarioInterface){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/inventarios/?access_token=${token}`;
    return this.http.post<inventarioInterface>(url_api, inv ,{headers: this.headers})
    .pipe(map(data => data));
  }

  saveMensagem(mensagem: mensagemInterface){
    let token = this.authService.getToken();
    const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/mensagens/?access_token=${token}`;
    return this.http.post<mensagemInterface>(url_api, mensagem ,{headers: this.headers})
    .pipe(map(data => data));
  }

}
