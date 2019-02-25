import { UserInterface } from './../../../../models/user-interface';
import { usuarioImpInterface } from './../../../../models/usuarioimp-interface';
import { UsuarioimpDataService } from './../../../../services/usuarioimp-data.service';
import { NgForm } from '@angular/forms';
import { DataApiService } from './../../../../services/data-api.service';
import { impInterface } from './../../../../models/imp-interface';
import { Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { portugues } from './../../../../../interfaces/datatables.es';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-listagemimp',
  templateUrl: './listagemimp.component.html',
  styleUrls: ['./listagemimp.component.css']
})
export class ListagemimpComponent implements OnInit, OnDestroy {
  
  public imps: impInterface;
  private uimps: usuarioImpInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private http: HttpClient, private dataApi: DataApiService, private userImp: UsuarioimpDataService, private cd : ChangeDetectorRef) { }

  //imp list
  getlistimpressoras(): void{
    this.dataApi.getallimpressoras().subscribe((imps: impInterface ) => { 
    this.imps = imps;
    this.dtTrigger.next();
    });
  }

  onPreUpdateImp(imp: impInterface){
    this.dataApi.selectedImp = Object.assign({}, imp);
  }

  resetForm(impForm?: NgForm): void{
    this.dataApi.selectedImp = {
      id: null,
      setor: '',
      ip: '',
      filial: '',
      modelo: ''
    };
  }


  ngOnInit() {

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

    this.getlistimpressoras();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
