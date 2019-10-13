import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { portugues } from './../../../../../interfaces/datatables.es';
import { colaboradorInterface } from '../../../../models/colaborador-interface';
import { ColaboradorServiceService } from '../../../../services/colaborador-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service'


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})

export class ColaboradorComponent implements OnInit {

  public user;
  public isAdm;
  public cols: colaboradorInterface;
  public unids;
  public cargs;
  public setores;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  constructor(public http: HttpClient, public colApi: ColaboradorServiceService, public authservice: AuthService) { }

  onSaveCol(colForm: NgForm): void{
    if(colForm.value.id == null){
      this.colApi.saveCol(colForm.value).subscribe(col => location.reload());
    }else{
      this.colApi.updateCol(colForm.value).subscribe(col => location.reload());
    }
  }

  getColaboradores(): void{
    this.colApi.getColaboradores().subscribe((cols: colaboradorInterface ) => { 
    this.cols = cols;
    this.dtTrigger.next();
    });
  }

  getUnidade(): void{
    this.colApi.getUnidades().subscribe((unids) => { 
    this.unids = unids;
    });
  }

  getSetor(): void{
    this.colApi.getSetores().subscribe((setores) => { 
    this.setores = setores;
    });
  }

  getCargo(): void{
    this.colApi.getCargos().subscribe((cargs) => { 
    this.cargs = cargs;
    });
  }

  onAdmUser(): void{
    this.user = this.authservice.getCurrentUser();
    if(this.user.id == 1 || this.user.id == 2){
      this.isAdm = true;
    }else{
      this.isAdm = false;
    }
  }

  resetForm(colForm?: NgForm): void{
    this.colApi.SelectCol = {
      id: null,
      nome: '',
      unidade: '',
      setor: '',
      cargo: '',
      contato: '',
      email: ''
    };
  }

  onPreCol(col: colaboradorInterface){
    this.colApi.SelectCol = Object.assign({}, col);
  }

  ngOnInit() {
    this.onAdmUser();
    this.getColaboradores();
    this.getUnidade();
    this.getCargo();
    this.getSetor();

    /*
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: this.dtLanguage,
      // Declare the use of the extension in the dom parameter
      dom: 'lfBrtip',

      // Configure the buttons
      buttons: [
        { extend: 'colvis', text: 'Ocultar Colunas' },
        {
          extend: 'copy', text: 'Copiar'
        },
        { extend: 'print', text: 'Imprimir' },
        { extend: 'excel', text: 'Exportar para Excel' },
      ]
    };
    */
    

    
  }

}
