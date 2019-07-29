import { LojaServiceService } from './../../../../services/loja-service.service';
import { LojaInterface } from './../../../../models/loja-interface';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { portugues } from './../../../../../interfaces/datatables.es';
import { AuthService } from '../../../../services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  public lojas: LojaInterface;

  constructor(private http: HttpClient, private authservice: AuthService, private LojaServiceService: LojaServiceService) { }

  public isLogged: boolean = false;

  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  resetForm(lojaForm?: NgForm): void{
    this.LojaServiceService.selectedloja = {
      id: null,
      unidade: '',
      cxatu: '',
      lstatus: null
    };
  }

  getLUnidades(){
    this.LojaServiceService.getAllUnidades().subscribe((lojas: LojaInterface ) => {
    this.lojas = lojas;
    });
  }

  updateUni(UniForm: NgForm){
      this.LojaServiceService.updateUnidades(UniForm.value).subscribe(ate => setTimeout(() => {
        location.reload();
      }, 1000));
  }

  onPreUpdateLoja(loja: LojaInterface) {
    this.LojaServiceService.selectedloja = Object.assign({}, loja);
  }

  ngOnInit(): void {
    this.getLUnidades();
    this.onCheckUser();
  }

  ngOnDestroy(): void {
  }

}

