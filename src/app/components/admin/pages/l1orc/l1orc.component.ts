import { LojaServiceService } from './../../../../services/loja-service.service';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';
import { isNullOrUndefined } from 'util';
import { ConsultasService } from '../../../../services/consultas.service';
import { CONNREFUSED } from 'dns';


@Component({
  selector: 'app-l1orc',
  templateUrl: './l1orc.component.html',
  styleUrls: ['./l1orc.component.css']
})
export class L1orcComponent implements OnInit {

  constructor(private http: HttpClient, private authservice: AuthService, private LojaServiceService: LojaServiceService, public consultasService: ConsultasService) { }

  public sl1;
  public sl1f;
  public isLogged: boolean = false;
  public cont = {};

  getSL1(){
    const url_api = `http://192.168.6.142:21181/api/ocl`;
    this.http.get(url_api).subscribe((sl10) => {
      this.sl1 = sl10;
      this.sl1f = this.sl1;
      this.contador_preguica();
    });    
  }

  contador_preguica(){
      this.cont['0000'] = 0;
      for(let l1 of this.sl1) {
        if(typeof(this.cont[l1.FILIAL]) != 'number') {
          this.cont[l1.FILIAL] = 1;
        } else {
          this.cont[l1.FILIAL]++;
        }
        if(typeof(this.cont[l1.STATUS]) != 'number') {
          this.cont[l1.SITUA] = 1;
        } else {
          this.cont[l1.SITUA]++;
        }
        this.cont['0000']++;
      }
  }

  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  get_PerFilial(filial){
    this.sl1f = [];
    console.log(filial)
    if(filial == 'ER' || filial == 'RX'){
      for(let l1 of this.sl1){
        if(l1.SITUA == filial){
          this.sl1f.push(l1);
        }
      }
    }else{
      if(filial == "0000"){
        this.sl1f = this.sl1;
      }else{
        for(let l1 of this.sl1){
          if(l1.FILIAL == filial){
            this.sl1f.push(l1);
          }
        }
      }
    }
          
  }
  
  ngOnInit() {
    this.onCheckUser();
    this.getSL1();    
  }

}
