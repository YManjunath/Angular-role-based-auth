import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Role } from './model/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Role: Role

  constructor( private auth:AuthService, private router:Router){}

  get isAuthorized(){
    return this.auth.isAuthorized();
  }

  get isAdmin(){
    return this.auth.hasRole(Role.Admin);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
