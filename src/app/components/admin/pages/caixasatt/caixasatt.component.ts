import { LojaServiceService } from './../../../../services/loja-service.service';
import { LojaInterface } from './../../../../models/loja-interface';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { portugues } from './../../../../../interfaces/datatables.es';
import { AuthService } from '../../../../services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
//import ATT from "Z:\\logs\\geral.json";
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
  public search5;
  public lojas;
  public loja = {id: 0, lstatus: 0, quantcx: 0};
  public quantcx = [];
  public newdate;
  public ultatt;
  public hoje;
  public filtroStatus = "Todos";
  public cx;
  public cx2;
  public caixas;
  public status;
  public isLogged: boolean = false;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  dtLanguage: any = portugues;
  public dataSource(textFilter) {
    const r = this.pipe.transform(this.cx2,
                                 [{field: 'caixa', value: textFilter}]);
    return r;
  }

  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  getCXS(){
    const url_api = `http://192.168.6.142:21181/api/ocl/cxs`;
    this.http.get(url_api).subscribe((cxs) => {
      this.caixas = cxs;
      this.getLUnidades();
      setTimeout(() => {
        this.get_caixas(0);
      }, 500);  
    });    
  }

  
  getData	= function(V_Mascara: any, O_DataInicial, O_DataFinal) {
    function getMesExtenso(MES) {
      if(MES == 1) {
        return("Janeiro");
      } else if(MES == 2) {
        return("Fevereiro");
      } else if(MES == 3) {
        return("Marco");
      } else if(MES == 4) {
        return("Abril");
      } else if(MES == 5) {
        return("Maio");
      } else if(MES == 6) {
        return("Junho");
      } else if(MES == 7) {
        return("Julho");
      } else if(MES == 8) {
        return("Agosto");
      } else if(MES == 9) {
        return("Setembro");
      } else if(MES == 10) {
        return("Outubro");
      } else if(MES == 11) {
        return("Novembro");
      } else if(MES == 12) {
        return("Dezembro");
      }
    }
  
    if(typeof(V_Mascara) != "string") {
      V_Mascara = "dd/MM/aaaa HH:mm:ss";
    }
    if(typeof(O_DataInicial) != "object") {
      O_DataInicial = new Date();
    }
  
    if(typeof(O_DataFinal) == "object") {
      var V_Mil: any = O_DataFinal.getTime() - O_DataInicial.getTime();
  
      var V_ss: any = V_Mil / 1000;
      var V_mm: any = V_ss / 60;
      var V_HH: any = V_mm / 60;
      var V_dd: any = V_HH / 24;
      var V_MM: any = V_dd / 30;
      var V_aaaa: any = String	(V_MM / 12);
  
      V_Mil = String(V_Mil % 1000);
      V_ss = String(V_ss % 60);
      V_mm = String(V_mm % 60);
      V_HH = String(V_HH % 24);
      V_dd = String(V_dd % 30);
      V_MM = String(V_MM % 12);
    } else {
      var V_aaaa: any = String(O_DataInicial.getFullYear());
      var V_MM: any = String(O_DataInicial.getMonth() + 1);
      var V_dd: any = String(O_DataInicial.getDate());
      var V_HH: any = String(O_DataInicial.getHours());
      var V_mm: any = String(O_DataInicial.getMinutes());
      var V_ss: any = String(O_DataInicial.getSeconds());
      var V_Mil: any = String(O_DataInicial.getMilliseconds());
    }
  
    if		(V_MM.length < 2)	V_MM	= "0" + V_MM;
    if		(V_dd.length < 2)	V_dd	= "0" + V_dd;
    if		(V_HH.length < 2)	V_HH	= "0" + V_HH;
    if		(V_mm.length < 2)	V_mm	= "0" + V_mm;
    if		(V_ss.length < 2)	V_ss	= "0" + V_ss;
    while	(V_Mil.length < 3)	V_Mil	= "0" + V_Mil;
  
    V_Mascara = V_Mascara.replace(/MMMM/g, getMesExtenso(V_MM));
    V_Mascara = V_Mascara.replace(/aaaa/g, V_aaaa);
    V_Mascara = V_Mascara.replace(/MM/g, V_MM);
    V_Mascara = V_Mascara.replace(/dd/g, V_dd);
    V_Mascara = V_Mascara.replace(/HH/g, V_HH);
    V_Mascara = V_Mascara.replace(/mm/g, V_mm);
    V_Mascara = V_Mascara.replace(/ss/g, V_ss);
    V_Mascara = V_Mascara.replace(/mIL/g, V_Mil);
  
    return(V_Mascara);
  }

  get_caixas(atus){
    var i = 0;
    this.cx = []
    for(let k = 1; k <= 10; k++){
         this.quantcx[k] = 0;
    }
   for(let caixa in this.caixas){
    for(let caixa2 in this.caixas[caixa]){
       this.cx[i] = {};
       this.cx[i].caixa = caixa + "-" + caixa2;
       this.cx[i].unidade = caixa.toUpperCase();
       this.cx[i].caixan = caixa2;
       this.cx[i].data = new Date(this.caixas[caixa][caixa2]);
       this.cx[i].data2 = (this.cx[i].data.getDate() + "/" + (parseInt(this.cx[i].data.getMonth(),10) + 1 )+ "/" + this.cx[i].data.getFullYear());
       this.cx[i].data3 = (this.cx[i].data.getHours() + ":" +  this.cx[i].data.getMinutes());
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
       if(this.newdate < this.cx[i].data.getTime()){
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
            this.quantcx[7]++;
            this.loja.quantcx = this.quantcx[7];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CBD' && this.lojas[2].lstatus == 0){
            this.loja.id = 3;
            this.loja.lstatus = 1;
            this.quantcx[3]++;
            this.loja.quantcx = this.quantcx[3];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CD' && this.lojas[3].lstatus == 0){
            this.loja.id = 4;
            this.loja.lstatus = 1;
            this.quantcx[4]++;
            this.loja.quantcx = this.quantcx[4];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'CGE' && this.lojas[8].lstatus == 0){
            this.loja.id = 9;
            this.loja.lstatus = 1;
            this.quantcx[9]++;
            this.loja.quantcx = this.quantcx[9];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'DV' && this.lojas[7].lstatus == 0){
            this.loja.id = 8;
            this.loja.lstatus = 1;
            this.quantcx[8]++;
            this.loja.quantcx = this.quantcx[8];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'FOR' && this.lojas[5].lstatus == 0){
            this.loja.id = 6;
            this.loja.lstatus = 1;
            this.quantcx[6]++;
            this.loja.quantcx = this.quantcx[6];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'JNE' && this.lojas[4].lstatus == 0){
            this.loja.id = 5;
            this.loja.lstatus = 1;
            this.quantcx[5]++;
            this.loja.quantcx = this.quantcx[5];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'JPA' && this.lojas[1].lstatus == 0){
            this.loja.id = 2;
            this.loja.lstatus = 1;
            this.quantcx[2]++;
            this.loja.quantcx = this.quantcx[2];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'MCZ' && this.lojas[0].lstatus == 0){
            this.loja.id = 1;
            this.loja.lstatus = 1;
            this.quantcx[1]++;
            this.loja.quantcx = this.quantcx[1];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
          if(this.cx[i].unidade == 'NAT' && this.lojas[9].lstatus == 0){
            this.loja.id = 10;
            this.loja.lstatus = 1;
            this.quantcx[10]++;
            this.loja.quantcx = this.quantcx[10];
            this.LojaServiceService.updateStatus(this.loja).subscribe(loja => setTimeout(() => {
           }, 500));
          }
      }
       i++;
     }
     this.cx2 = this.cx;     
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

  get_PerStatus(){
    this.cx2 = [];
    var i = 0;
    if(this.filtroStatus == 'Atualizados'){
      for(let cf of this.cx){
        if(cf.status == true){
          this.cx2[i] = cf;
        }
        i++;
      }
    }else if(this.filtroStatus == 'Desatualizados'){
      for(let cf of this.cx){        
        if(cf.status != true){
          this.cx2[i] = cf;
        }
        i++;
      }
    }else if (this.filtroStatus == 'Todos'){
      this.get_caixas(0);
    }
    
   
  }

  atualizarcx(){
    this.get_caixas(1);
    setTimeout(() => {
      location.reload();
      
     }, 30000); 
  }

  getLUnidades(){
    this.LojaServiceService.getAllUnidades().subscribe((lojas) => {
      this.lojas = lojas
    });
  }

  ngOnInit() {
    this.getCXS();  
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
