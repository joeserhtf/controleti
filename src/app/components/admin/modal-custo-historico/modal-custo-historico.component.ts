import { historicoInterface } from './../../../models/historico-interface';
import { Component, OnInit } from '@angular/core';
import { CustofixoDataService } from 'src/app/services/custofixo-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { portugues } from '../../../../interfaces/datatables.es';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { custofixoInterface } from 'src/app/models/custofixo-interface';

@Component({
  selector: 'app-modal-custo-historico',
  templateUrl: './modal-custo-historico.component.html',
  styleUrls: ['./modal-custo-historico.component.css']
})
export class ModalCustoHistoricoComponent implements OnInit {

  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();
  public hists: historicoInterface;

  private names: historicoInterface;

  constructor(private http: HttpClient,
    private custofixodata: CustofixoDataService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  private histss: historicoInterface = {
    cfid: '',
    nf: '',
    recebimento: '',
    vencimento: '',
    valor: '',
    situacao: '',
    sc: ''
  };

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

    const cf_id = this.route.snapshot.params['id'];
    this.getHistorico(cf_id);
    this.getNameCf(cf_id);

  }

  getNameCf(cf_id: number): void{
    this.custofixodata.getNameById(cf_id).subscribe((names: custofixoInterface) => {
    this.names = names;
  });
}

reload(){
  location.reload();
}

testId(){
  const cf_id = this.route.snapshot.params['id'];
  if(cf_id == 0){
    return false;
  }else{
    return true;
  }
}

  getHistorico(cf_id: number): void{
    this.custofixodata.getCfById(cf_id).subscribe((hists: historicoInterface) => {
    this.hists = hists;
    this.dtTrigger.next();
  });
}

}
