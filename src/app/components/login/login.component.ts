import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { UserInterface } from './../../models/user-interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from "util";

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
    id: null,
    nome: "",
    email: "",
    password: "",
    setor: "",
    cargo: "",
    filial: "",
    contato: ""
  }

  public data;
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
        this.data = data;
        if(!isNullOrUndefined(this.data[0])){
          this.authService.setUser(this.data[0]);
          this.router.navigate(['/admin/unidades']);
           setTimeout(() => {
            location.reload();
            }, 500); 
           this.isError = false;
        }else{
          this.onIsError();
        }      
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
    }, 3000);
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('hold-transition');
    this.body.classList.remove('login-page');
  }

}
