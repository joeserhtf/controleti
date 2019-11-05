import { LojaServiceService } from '../../../../../services/loja-service.service';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../../services/auth.service';
import { isNullOrUndefined } from 'util';
import { ConsultasService } from '../../../../../services/consultas.service';

@Component({
  selector: 'app-cpedidon',
  templateUrl: './cpedidon.component.html',
  styleUrls: ['./cpedidon.component.css']
})
export class CpedidonComponent implements OnInit {

  constructor(private http: HttpClient, private authservice: AuthService) { }


  public isLogged: boolean = false;

  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }
  
  ngOnInit() {
    this.onCheckUser();
    
  }

}
