import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginId: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) { }

  signIn() {
    console.log("Sign In button clicked");
    console.log("Login ID: " + this.loginId);
    console.log("Password: " + this.password);

    if (this.loginId === 'admin' && this.password === 'admin') {
      this.router.navigateByUrl('welcome');
    } else {
      this.message = 'Invalid login credentials. Please try again.';
    }
  }

}
