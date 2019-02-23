import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private authService: AuthService) { }
  user: UserInterface;
  public isLogged: boolean = false;
  onCheckUser(): void{
    if(this.authService.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  
  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.onCheckUser();
  }

}
