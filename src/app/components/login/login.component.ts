import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { UserInterface } from './../../models/user-interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-green sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  checkbox_icheck: HTMLElement = document.getElementById('checkbox_icheck');

  constructor(private authService: AuthService, private router: Router) { }
  public user: UserInterface = {
    email: "",
    password: ""
  }

  public isError = false;

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('hold-transition');
    this.body.classList.add('login-page');

    // jQuery(this.checkbox_icheck).iCheck({
    //   checkboxClass: 'icheckbox_square-blue',
    //   radioClass: 'iradio_square-blue',
    //   increaseArea: '20%' /* optional */
    // });
  }

  onLogin(form: NgForm){
    if(form.valid){
       return this.authService.loginuser(this.user.email, this.user.password)
       .subscribe(data => {
       this.authService.setUser(data.user);
       let token = data.id;
       this.authService.setToken(token);
       this.router.navigate(['/admin/admin-home']);
       setTimeout(() => {
        location.reload();
        }, 500); 
       this.isError = false;
       },
       error => this.onIsError());
    }else{
      this.onIsError();
    } 
  }

  onIsError(): void{
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('hold-transition');
    this.body.classList.remove('login-page');
  }

}
