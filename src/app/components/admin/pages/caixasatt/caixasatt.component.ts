import { LojaServiceService } from './../../../../services/loja-service.service';
import { LojaInterface } from './../../../../models/loja-interface';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { portugues } from './../../../../../interfaces/datatables.es';
import { AuthService } from '../../../../services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import ATT from "Z:\\joeser.json";
import { isNullOrUndefined } from 'util';
import { FilterPipe } from 'w-ng5'; 

@Component({
  selector: 'app-caixasatt',
  templateUrl: './caixasatt.component.html',
  styleUrls: ['./caixasatt.component.css'],
  providers: [FilterPipe]
})
export class CaixasattComponent implements OnInit {

  constructor(private pipe: FilterPipe, private http: HttpClient, private authservice: AuthService, private LojaServiceService: LojaServiceService) { }
  filtroString
  public lojas;
  public loja = {id: 0, lstatus: 0};
  public newdate;
  public ultatt;
  public hoje;
  public cx;
  public caixas = ATT;
  public status;
  public isLogged: boolean = false;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  dtLanguage: any = portugues;
  public dataSource(textFilter) {
    const r = this.pipe.transform(this.cx,
                                 [{field: 'caixa', value: textFilter}]);
    return r;
  }
  public dataSource2(textFilter2) {
    const r = this.pipe.transform(this.cx,
                                 [{field: 'status', value: textFilter2}]);
    return r;
  }

  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }
  
  get_caixas(atus){
    var i = 0;
    this.cx = []
   for(let caixa in this.caixas){
    for(let caixa2 in this.caixas[caixa]){
       this.cx[i] = {};
       this.cx[i].caixa = caixa + "-" + caixa2;
       this.cx[i].unidade = caixa;
       this.cx[i].caixan = caixa2;
       this.cx[i].data = this.caixas[caixa][caixa2];
       let temp = this.cx[i].data.split(" ");
       let temp2 = temp[0].split("/");
       let temp3 = temp[1].split(":");
       this.cx[i].data2 = (temp2[0] + "/" +  temp2[1] + "/" + temp2[2]);
       this.cx[i].data3 = (temp3[0] + ":" +  temp3[1]);
       this.cx[i].ultatt = new Date(temp2[2], (temp2[1] - 1), temp2[0], temp3[0], temp3[1]).getTime();
       this.hoje = new Date();
       let month = this.hoje.getMonth() + 1; //months from 1-12
       let day = this.hoje.getDate();
       let year = this.hoje.getFullYear();
        if(this.cx[i].unidade == 'ARA'){
          this.newdate = new Date(this.lojas[6].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'CBD'){
          this.newdate = new Date(this.lojas[2].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'CD'){
          this.newdate = new Date(this.lojas[3].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'CGE'){
          this.newdate = new Date(this.lojas[8].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'DV'){
          this.newdate = new Date(this.lojas[7].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'FOR'){
          this.newdate = new Date(this.lojas[5].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'JNE'){
          this.newdate = new Date(this.lojas[4].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'JPA'){
          this.newdate = new Date(this.lojas[1].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'MCZ'){
          this.newdate = new Date(this.lojas[0].cxatu).getTime();
        }
        if(this.cx[i].unidade == 'NAT'){
          this.newdate = new Date(this.lojas[9].cxatu).getTime();
        }
       
      // this.newdate = new Date(year, (month - 1), day, 8, 30).getTime();
       if(this.newdate < this.cx[i].ultatt){
          this.cx[i].status = true;
          if(this.cx[i].unidade == 'ARA' && this.lojas[6].lstatus == 1 && atus){
            this.loja.id = 7;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CBD' && this.lojas[2].lstatus == 1 && atus){
            this.loja.id = 3;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CD' && this.lojas[3].lstatus == 1 && atus){
            this.loja.id = 4;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CGE' && this.lojas[8].lstatus == 1 && atus){
            this.loja.id = 9;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'DV' && this.lojas[7].lstatus == 1 && atus){
            this.loja.id = 8;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'FOR' && this.lojas[5].lstatus == 1 && atus){
            this.loja.id = 6;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'JNE' && this.lojas[4].lstatus == 1 && atus){
            this.loja.id = 5;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'JPA' && this.lojas[1].lstatus == 1 && atus){
            this.loja.id = 2;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'MCZ' && this.lojas[0].lstatus == 1 && atus){
            this.loja.id = 1;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'NAT' && this.lojas[9].lstatus == 1 && atus){
            this.loja.id = 10;
            this.loja.lstatus = 0;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
       }else {
          if(this.cx[i].unidade == 'ARA' && this.lojas[6].lstatus == 0){
            this.loja.id = 7;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CBD' && this.lojas[2].lstatus == 0){
            this.loja.id = 3;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CD' && this.lojas[3].lstatus == 0){
            this.loja.id = 4;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CGE' && this.lojas[8].lstatus == 0){
            this.loja.id = 9;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'DV' && this.lojas[7].lstatus == 0){
            this.loja.id = 8;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'FOR' && this.lojas[5].lstatus == 0){
            this.loja.id = 6;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'JNE' && this.lojas[4].lstatus == 0){
            this.loja.id = 5;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'JPA' && this.lojas[1].lstatus == 0){
            this.loja.id = 2;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'MCZ' && this.lojas[0].lstatus == 0){
            this.loja.id = 1;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'NAT' && this.lojas[9].lstatus == 0){
            this.loja.id = 10;
            this.loja.lstatus = 1;
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
      }
       i++;
     }     
   }

   this.cx = this.cx.sort(function (a, b) {
      if (a.caixa < b.caixa) {
          return -1;
      } else if (b.caixa < a.caixa) {
          return 1;
      } else {
          return 0;
      }
   });
  }

  atualizarcx(){
    fetch('http://192.168.6.142:21181/api/cx');
    this.get_caixas(1);
  }

  getLUnidades(){
    this.LojaServiceService.getAllUnidades().subscribe((lojas) => {
      this.lojas = lojas
    });
  }


  ngOnInit() {
    this.getLUnidades();
    setTimeout(() => {
     this.get_caixas(0);
    }, 500);    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
