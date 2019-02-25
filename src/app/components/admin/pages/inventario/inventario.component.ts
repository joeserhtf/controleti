import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { portugues } from './../../../../../interfaces/datatables.es';
import { inventarioInterface } from 'src/app/models/inventario-interface';
import { InventarioDataService } from '../../../../services/inventario-data.service'

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  public invs: inventarioInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient, private inventarioDataService: InventarioDataService) { }

  getInventario(): void{
    this.inventarioDataService.getAllInventario().subscribe((invs: inventarioInterface ) => { 
    this.invs = invs;
    this.dtTrigger.next();
    });
  }

  onPreUpdateInv(inv: inventarioInterface){
    this.inventarioDataService.selectedItem = Object.assign({}, inv);
  }

  resetForm(invForm?: NgForm): void{
    this.inventarioDataService.selectedItem = {
      id: null,
      item: '',
      quantidade: 0
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

    this.getInventario();

  }

}
