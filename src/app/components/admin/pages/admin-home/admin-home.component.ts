import { AtendimentoDataService } from './../../../../services/atendimento-data.service';
import { atendimentoInterface } from './../../../../models/atendimento-interface';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { portugues } from './../../../../../interfaces/datatables.es';
import { AuthService } from '../../../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit, OnDestroy {

  public user;
  public isAdm;
  public present = [];
  public ates: atendimentoInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient, public atendimentoDataService: AtendimentoDataService, private authservice: AuthService) { }

  public isLogged: boolean = false;
  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  getlistAtendentes(){
    this.atendimentoDataService.getAllAtendimentos().subscribe((ates: atendimentoInterface ) => {
    this.ates = ates;
    });
  }

  updateAte(AteForm: NgForm){
      this.atendimentoDataService.updateAtendimentos(AteForm.value).subscribe(ate => setTimeout(() => {
        location.reload();
      }, 1000));
  }

  onPreUpdateAte(ate: atendimentoInterface) {
    this.atendimentoDataService.selectedAte = Object.assign({}, ate);
  }

  presenteON() {
    setTimeout(() => {
      let fhora = new Date();
      let hora = fhora.getHours()
      let minuto = fhora.getMinutes()
      for(let ate in this.ates){
        if(this.ates[ate].horario == 'Fechamento'){ 
          if(hora >= 11 && hora < 15){
            if(hora == 11 && minuto >= 30){
              this.present.push(0);
            }else if(hora > 11){
              this.present.push(0);
            }else{
              this.present.push(1);
            }
          }else if((hora >= 17 && hora < 22)){
            this.present.push(0);
          }else{
            this.present.push(1);
          }
        }else if(this.ates[ate].horario == 'Intermediário'){   
          if((hora >= 9 && hora < 13)){
            this.present.push(0);
          }else if((hora >= 15 && hora < 19)){
            this.present.push(0);
          }else{
            this.present.push(1);
          }
        }else if(this.ates[ate].horario == 'Comercial') {        
          if((hora >= 8 && hora < 12)){
            this.present.push(0);
          }else if((hora >= 14 && hora < 18)){
            this.present.push(0);
          }else{
            this.present.push(1);
          }
        }else if(this.ates[ate].horario == 'Abertura'){
          if((hora >= 7 && hora < 11)){
            this.present.push(0);
          }else if((hora >= 13 && hora < 17)){
            this.present.push(0);
          }else{
            this.present.push(1);
          }
        }else if(this.ates[ate].horario == 'Matutino'){
          if((hora >= 8 && hora < 13)){
            this.present.push(0);
          }else{
            this.present.push(1);
          }
        }else if(this.ates[ate].horario == 'Vespertido'){
          if((hora >= 14 && hora < 19)){
            this.present.push(0);
          }else{
            this.present.push(1);
          }
        }
        
      }
    }, 300)
    
  }

  onAdmUser(): void{
    this.user = this.authservice.getCurrentUser();
    if(this.user){
      if(this.user.id == 1 || this.user.id == 2){
        this.isAdm = true;
      }else{
        this.isAdm = false;
      }
    }else{
      this.isAdm = false;
    }  
  }
    

  ngOnInit(): void {
    this.getlistAtendentes();
    this.onCheckUser();
    this.presenteON();
    this.onAdmUser();
  }

  ngOnDestroy(): void {
  }

}
