import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { portugues } from './../../../../../interfaces/datatables.es';
import { colaboradorInterface } from '../../../../models/colaborador-interface';
import { ColaboradorServiceService } from '../../../../services/colaborador-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})

export class ColaboradorComponent implements OnInit {

  public cols: colaboradorInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  constructor(public http: HttpClient, public colApi: ColaboradorServiceService) { }

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

    this.getColaboradores();

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

    

    
  }

}
