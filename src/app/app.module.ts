import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { AuthServiceService } from './auth-service.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CollegeComponent } from './college/college.component';
import { TimetableComponent } from './timetable/timetable.component';
import { RoleListComponent } from './role/role-list.component';
import { FooterComponent } from './footer/footer.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';

import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';

import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { MarksheetMeritListComponent } from './marksheet/marksheet-merit-list.component';

import { ChangePasswordComponent } from './user/change-password.component';
import { MyprofileComponent } from './user/my-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LibraryComponent } from './library/library.component';
import { LibraryListComponent } from './library/library-list.component';




@NgModule({
  declarations: [

  
    // Root and layout components
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    WelcomeComponent,

    // Authentication and user profile components
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    MyprofileComponent,
    ChangePasswordComponent,

    // Entity management components
    CollegeComponent,
    CourseComponent,
    SubjectComponent,
    TimetableComponent,
    MarksheetComponent,
    StudentComponent,
    FacultyComponent,
    UserComponent,
    RoleComponent,
    EmployeeComponent,

    // List components
    RoleListComponent,
    UserListComponent,
    CollegeListComponent,
    StudentListComponent,
    MarksheetListComponent,
    CourseListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
    EmployeeListComponent,

    // Marksheet-related components
    GetMarksheetComponent,
    MarksheetMeritListComponent,
    LibraryComponent,
    LibraryListComponent
  ],
  imports: [
     BrowserModule,             // Browser support
    AppRoutingModule,          // Application routing
    HttpClientModule,          // HTTP communication with backend
    FormsModule,               // Template-driven forms
    TranslateModule.forRoot()  // Language translation support

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
    },
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }