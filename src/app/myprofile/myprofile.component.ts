import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',

})
export class MyprofileComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }

  override ngOnInit(): void {
 let userId = localStorage.getItem('userId');

    console.log('Login User ID:', userId);

    if (userId) {
      this.form.data.id = Number(userId);
      this.display();
    } else {
      console.log('User ID not found in localStorage');
    }
  }

}
