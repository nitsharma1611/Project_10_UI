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

  // Login Status
  isLoggedIn: boolean = false;

  // User Roles
  isAdmin: boolean = false;
  isStudent: boolean = false;
  isCollege: boolean = false;
  isKiosk: boolean = false;

  ngOnInit(): void {




    // Get Login Details From Local Storage

    this.loginId = localStorage.getItem("loginId");
    this.role = localStorage.getItem("role");


 this.userId = localStorage.getItem('userId');

    // Check Login Status

    this.isLoggedIn = this.loginId != null;

    // Check User Roles

    this.isAdmin = this.isLoggedIn && this.role === 'Admin';

    this.isStudent = this.isLoggedIn && this.role === 'Student';

    this.isCollege = this.isLoggedIn && this.role === 'College';

    this.isKiosk = this.isLoggedIn && this.role === 'KIOSK';

  }

}