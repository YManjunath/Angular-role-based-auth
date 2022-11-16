import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../model/role'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  role = Role;

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(role: Role){
    this.auth.login(role);
    this.router.navigate(['/']);
  }
  

}
