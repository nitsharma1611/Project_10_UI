import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  endpoint = "http://localhost:8080/Auth/";

  form: any = {
    data: {}
  }

constructor(private translate: TranslateService, private httpService: HttpServiceService, private router: Router, private servicelocator: ServiceLocatorService) {
    const locale = localStorage.getItem("locale") || 'en';
    translate.setDefaultLang(locale);
    translate.use(locale);
  }

  changeLocale(locale: string) {
    localStorage.setItem("locale", locale);
    this.translate.use(locale);
  }


    isLogin() {
    let check = localStorage.getItem('fname');
    console.log("fname:", localStorage.getItem("fname"));
console.log("role:", localStorage.getItem("role"));
console.log("userId:", localStorage.getItem("userId"));
    if (check && check !== "null" && check.trim() !== "") {
      this.form.data.fname = localStorage.getItem("fname");
      this.form.data.role = localStorage.getItem("role");
      this.form.data.id = localStorage.getItem("userId");
      return true;
    } else {
      return false;
    }
  }
setDefaultImage(event: Event): void {

  const img = event.target as HTMLImageElement;

  if (!img.src.endsWith('/assets/files/default.jpg')) {

    img.src = 'assets/files/default.jpg';

  }
}

   logout() { 
    var _self = this;
    this.httpService.get(this.endpoint + 'logout', function (res: any) {
      localStorage.clear();
      _self.router.navigateByUrl('login?message=User Logout Successfully')
    });
  }

   forward() {
     this.form.data.id = localStorage.getItem("userId");
    this.servicelocator.forward("/myProfile/" + this.form.data.id);
  }
} 
