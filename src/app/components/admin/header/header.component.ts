import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
    this.onCheckUser();
    this.user = this.authService.getCurrentUser();
  }


  onLogout(): void{
  this.authService.logoutUser();
  location.reload();
  }

}
