import { Subject } from 'rxjs';
import { DataApiService } from 'src/app/services/data-api.service';
import { UsuarioimpDataService } from './../../../services/usuarioimp-data.service';
import { Component, OnInit } from '@angular/core';
import { portugues } from '../../../../interfaces/datatables.es';
import { usuarioImpInterface } from 'src/app/models/usuarioimp-interface';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {

  public uimps: usuarioImpInterface;
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();

<<<<<<< HEAD
  constructor(public dataApiService: DataApiService, private userImp: UsuarioimpDataService) { 
=======
  constructor(public dataApiService: DataApiService, public userImp: UsuarioimpDataService) { 
>>>>>>> 71867fddefc0cb86163ee6ac55c6fa5c6705dd5a
    setTimeout(() => {
      this.getUsersImpressoras();
    }, 2000);
    
  }

  //user list  
  getUsersImpressoras(): void{
    this.userImp.getAllUserImp(this.dataApiService.selectedImp.ip).subscribe((uimps: usuarioImpInterface ) => { 
    this.uimps = uimps;
    });
  }

  resetForm(impForm?: NgForm): void{
    this.dataApiService.selectedImp = {
      id: null,
      setor: '',
      ip: '',
      filial: '',
      modelo: ''
    };
  } 

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
