import { AtendimentoDataService } from './../../../services/atendimento-data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataApiService } from './../../../services/data-api.service';
import { ScInterface } from './../../../models/sc-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-sc',
  templateUrl: './modal-sc.component.html',
  styleUrls: ['./modal-sc.component.css']
})
export class ModalScComponent implements OnInit {

  constructor(public dataApiService: DataApiService, public router: Router, public atendimentoService: AtendimentoDataService) { }

  onSaveSc(ScForm: NgForm): void{
      if(ScForm.value.id == null){
        this.dataApiService.saveSc(ScForm.value).subscribe(sc => setTimeout(() => {
          location.reload();
        }, 1000));
      }else{
        this.dataApiService.updateSc(ScForm.value).subscribe(sc => setTimeout(() => {
          location.reload();
        }, 1000));
      }
      
}

  ngOnInit() {
  }

}
