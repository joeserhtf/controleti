import { LojaServiceService } from './../../../../services/loja-service.service';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-l1orc',
  templateUrl: './l1orc.component.html',
  styleUrls: ['./l1orc.component.css']
})
export class L1orcComponent implements OnInit {

  constructor(private http: HttpClient, private authservice: AuthService, private LojaServiceService: LojaServiceService) { }

  public sl1;
  public isLogged: boolean = false;



  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  getSL1(){
    this.LojaServiceService.getSL1().subscribe((sl1) => {
      this.sl1 = sl1
    });
  }

  ngOnInit() {
    this.onCheckUser();
    this.getSL1();
  }

}
