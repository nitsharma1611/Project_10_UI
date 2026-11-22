
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  loginId: any;
  role: any;
  fname: any;
  lname: any;
  userId: any;



  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  isStudent: boolean = false;

  ngOnInit(): void {

    // Get Login Details From Local Storage

    this.loginId = localStorage.getItem("loginId");
    this.role = localStorage.getItem("role");
   

    // Check Login Status

    this.isLoggedIn = this.loginId != null;

   

    // Check User Role

    this.isAdmin = this.role === 'Admin';
    this.isStudent = this.role === 'Student';

  }

}
