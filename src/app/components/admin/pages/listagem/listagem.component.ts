import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScInterface } from './../../../../models/sc-interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { DataApiService } from 'src/app/services/data-api.service';
import { TestingCompilerFactoryImpl } from '@angular/platform-browser-dynamic/testing/src/compiler_factory';
import { portugues } from './../../../../../interfaces/datatables.es';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})


export class ListagemComponent implements OnInit {

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering

  public scs: ScInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient, private dataApi: DataApiService) { }

  getlistscs(): void {
    this.dataApi.getallscs().subscribe((scs: ScInterface) => {
      this.scs = scs;
      this.dtTrigger.next();
    });
  }

  onPreUpdateSc(sc: ScInterface) {
    this.dataApi.selectedSc = Object.assign({}, sc);
  }

  onDeleteSc(id: string): void {
    if (confirm("Certeza?")) {
      this.dataApi.deleteSc(id).subscribe();
      setTimeout(() => {
        location.reload();
      }, 1000);
      
    }
  }

  ngOnInit(): void {

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

    this.getlistscs();
  }

  resetForm(ScForm?: NgForm): void {
    this.dataApi.selectedSc = {
      id: null,
      numeroSC: '',
      produtoID: '',
      quantidadeP: '',
      solicitanteName: '',
      tipoID: '',
      chamadoID: '',
      aprovadorName: '',
      situacaoSC: '',
      descricao: '',
    };
  }

  ngOnDestroy(): void {
  }

}
