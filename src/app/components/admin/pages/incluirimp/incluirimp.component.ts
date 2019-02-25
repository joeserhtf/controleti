import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { ScInterface } from './../../../../models/sc-interface';

@Component({
  selector: 'app-incluirimp',
  templateUrl: './incluirimp.component.html',
  styleUrls: ['./incluirimp.component.css']
})
export class IncluirimpComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  public sc: ScInterface = {
    numeroSC: '',
    produtoID: '',
    quantidadeP: '',
    solicitanteName: '',
    tipoID: '',
    chamadoID: '',
    aprovadorName: '',
    situacaoSC: '',
  };

  ngOnInit() {


    
  }

  onInclude(): void{
    console.log(this.sc);
    this.dataApi.saveSc(this.sc)
      .subscribe( user => {
        console.log(user);
      });
  }

}