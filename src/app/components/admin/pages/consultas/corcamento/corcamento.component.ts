import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../../services/auth.service';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ConsultasService } from '../../../../../services/consultas.service';
import { DataApiService } from '../../../../../services/data-api.service';

@Component({
  selector: 'app-corcamento',
  templateUrl: './corcamento.component.html',
  styleUrls: ['./corcamento.component.css']
})
export class CorcamentoComponent implements OnInit {

  constructor(private http: HttpClient, private authservice: AuthService, public consultasService: ConsultasService,  private dataservice: DataApiService) { }

  public orcs;
  public orc;
  public filial;
  
  getrcd(orcp: NgForm){
    this.consultasService.getorc(orcp.value).subscribe((orcs) => {
      this.orcs = orcs;
      console.log(orcs);
      })
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


  ngOnInit() {
    
  }

}
