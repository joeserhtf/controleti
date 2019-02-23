import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authService: AuthService, private router: Router) {}
  
  canActivate(){
    if(this.authService.getCurrentUser()){
      // Logado
      return true;
    }else {
      this.router.navigate(['admin/login']);
      return false;
    }
  }
}
