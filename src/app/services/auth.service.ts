import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User;

  isAuthorized() {
    return !!this.user;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.user.Role === role;
  }

  login(role: Role){
    this.user = { Role:role }
  }

  logout(){
     this.user = null;
  }

  constructor() {}
}
