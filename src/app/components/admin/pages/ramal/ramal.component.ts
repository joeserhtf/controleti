import { HttpClient } from '@angular/common/http';
import { InventarioDataService } from './../../../../services/inventario-data.service';
import { ramalInterface } from './../../../../models/ramal-interface';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { portugues } from '../../../../../interfaces/datatables.es';

@Component({
  selector: 'app-ramal',
  templateUrl: './ramal.component.html',
  styleUrls: ['./ramal.component.css']
})
export class RamalComponent implements OnInit {

  public ramais: ramalInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  constructor(private inventarioDataService: InventarioDataService, private http: HttpClient) { }


  getRamal(): void{
    this.inventarioDataService.getAllRamal().subscribe((ramais: ramalInterface ) => { 
    this.ramais = ramais;
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

    this.getRamal();

  }

}
