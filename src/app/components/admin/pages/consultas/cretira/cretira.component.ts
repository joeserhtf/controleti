import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../../services/auth.service';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ConsultasService } from '../../../../../services/consultas.service';
import { DataApiService } from '../../../../../services/data-api.service';


@Component({
  selector: 'app-cretira',
  templateUrl: './cretira.component.html',
  styleUrls: ['./cretira.component.css']
})
export class CretiraComponent implements OnInit {

  constructor(private http: HttpClient, private authservice: AuthService, public consultasService: ConsultasService,  private dataservice: DataApiService) { }

  public rcd;
  public rd;

  getrcd(rcd: NgForm){
    this.consultasService.getcd(rcd.value).subscribe((rd) => {
      this.rd = rd;
      console.log(rd)
      })
    }



  ngOnInit() {

  }

}
