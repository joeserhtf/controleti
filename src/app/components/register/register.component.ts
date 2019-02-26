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

<<<<<<< HEAD
  constructor(private authService: AuthService, private router: Router) { }
=======
  constructor(public authService: AuthService, public router: Router) { }
>>>>>>> 71867fddefc0cb86163ee6ac55c6fa5c6705dd5a
  public user: UserInterface = {
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
