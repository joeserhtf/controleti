import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { portugues } from './../../../../../interfaces/datatables.es';
import { custofixoInterface } from '../../../../models/custofixo-interface';
import { CustofixoDataService } from '../../../../services/custofixo-data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-custofixo',
  templateUrl: './custofixo.component.html',
  styleUrls: ['./custofixo.component.css']
})
export class CustofixoComponent implements OnInit {

  public cfs: custofixoInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient, private cfApi: CustofixoDataService ) { }

  getCustoFixo(): void{
      this.cfApi.getAllCustoFixo().subscribe((cfs: custofixoInterface) => {
      this.cfs = cfs;
      this.dtTrigger.next();
    });
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

    this.getCustoFixo();

    
  }

}
