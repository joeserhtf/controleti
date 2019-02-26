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
<<<<<<< HEAD
    private location: Location
=======
    public location: Location
>>>>>>> 71867fddefc0cb86163ee6ac55c6fa5c6705dd5a
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
