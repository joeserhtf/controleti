import { InventarioDataService } from './../../../services/inventario-data.service';
import { inventarioInterface } from './../../../models/inventario-interface';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-inv',
  templateUrl: './modal-inv.component.html',
  styleUrls: ['./modal-inv.component.css']
})
export class ModalInvComponent implements OnInit {

<<<<<<< HEAD
  constructor(public inventarioDataService: InventarioDataService, private location: Location) { }
=======
  constructor(public inventarioDataService: InventarioDataService, public location: Location) { }
>>>>>>> 71867fddefc0cb86163ee6ac55c6fa5c6705dd5a

  ngOnInit() {
  }

  toNumberSaveMensagem(menForm: NgForm, invForm: inventarioInterface): void {
    this.inventarioDataService.mensagem.itemid = this.inventarioDataService.selectedItem.id;
    this.inventarioDataService.selectedItem.quantidade = ((this.inventarioDataService.selectedItem.quantidade)-1);
    if(this.inventarioDataService.selectedItem.quantidade == 0){
      setTimeout(() => {  
        this.inventarioDataService.saveMensagem(menForm.value).subscribe();
        this.inventarioDataService.deleteItem(this.inventarioDataService.selectedItem.id).subscribe();
        location.reload();
      }, 1000);
    }else{
      setTimeout(() => {
        this.inventarioDataService.updateInventario(invForm).subscribe(imp => location.reload());
        this.inventarioDataService.saveMensagem(menForm.value).subscribe(mensagem => location.reload());
      }, 1000);
    }
    
  }

  onSaveInv(invForm: NgForm): void{
    if(invForm.value.id == null){
      this.inventarioDataService.saveItem(invForm.value).subscribe(imp => location.reload());
    }else{
      this.inventarioDataService.updateInventario(invForm.value).subscribe(imp => location.reload());
    }
  }


}
