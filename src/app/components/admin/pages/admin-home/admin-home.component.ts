import { AtendimentoDataService } from './../../../../services/atendimento-data.service';
import { atendimentoInterface } from './../../../../models/atendimento-interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
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

  public ates: atendimentoInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

<<<<<<< HEAD
  constructor(private http: HttpClient, public atendimentoDataService: AtendimentoDataService, private authservice: AuthService) { }
=======
  constructor(public http: HttpClient, public atendimentoDataService: AtendimentoDataService, public authservice: AuthService) { }
>>>>>>> 71867fddefc0cb86163ee6ac55c6fa5c6705dd5a

  logado(){
    const token = this.authservice.getToken();
    if(token == null){
      return false;
    }else{
      return true;
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

  ngOnInit(): void {
    this.getlistAtendentes();
  }

  ngOnDestroy(): void {
  }

}
