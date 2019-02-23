import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dataApiService: DataApiService, 
    public location: Location
  ) { }

  ngOnInit() {
  }

  onSaveImp(impForm: NgForm): void{
    if(impForm.value.id == null){
      this.dataApiService.saveImp(impForm.value).subscribe(imp => location.reload());
    }else{
      this.dataApiService.updateImp(impForm.value).subscribe(imp => location.reload());
    }
  }

}
