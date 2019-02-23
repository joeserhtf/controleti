import { UserInterface } from './../../models/user-interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  private user: UserInterface = {
    name: "",
    email: "",
    password: ""
  };

  ngOnInit() {

  }
  
  onRegister(): void{
    this.authService.registerUser(
      this.user.name,
      this.user.email,
      this.user.password
      )
      .subscribe( user => {
        this.authService.setUser(user);
        let token = user.id;
        this.authService.setToken(token);
        this.router.navigate(['/admin/admin-home']);
      });
  }
}
