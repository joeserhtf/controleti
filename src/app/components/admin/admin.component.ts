import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScInterface } from './../../models/sc-interface';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  constructor(private dataApi: DataApiService) { }
  private scs: ScInterface;
  bodyClasses = 'skin-green sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  getlistscs(){
    this.dataApi.getallscs().subscribe((scs: ScInterface) => this.scs = scs);
  }

  ngOnInit() {
    // add the the body classes
    this.getlistscs();
    this.body.classList.add('skin-green');
    this.body.classList.add('sidebar-mini');
  }

  
   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-green');
    this.body.classList.remove('sidebar-mini');
  }
}
