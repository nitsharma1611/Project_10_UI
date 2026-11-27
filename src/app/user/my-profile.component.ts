
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { DaterangeService } from '../daterange.service';

@Component({
  selector: 'app-myProfile',
  templateUrl: './my-profile.component.html',
})
export class MyprofileComponent extends BaseCtl implements OnInit {
  maxDOB: String = '';
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute, private daterangeService: DaterangeService
  ) {
    super(locator.endpoints.USER, locator, route);
  }

  override ngOnInit(): void {
super.ngOnInit();
    this.maxDOB = this.daterangeService.getDOBMaxDate();



    // Call preload from BaseCtl
    this.preload();

    // Get logged-in user ID
    const userId = localStorage.getItem('userId');

    if (userId) {

      this.form.data.id = Number(userId);

      // Get logged-in user details
      this.display();
      

    } else {

      this.form.error = true;
      this.form.message = 'User ID not found. Please login again.';

    }
  }

  override display(): void {

    var _self = this;

    this.serviceLocator.httpService.get(
      this.api.get + '/' + this.form.data.id,
      function (res: any) {

        console.log('Profile API Response:', res);

        if (res.success) {

          _self.form.data = res.result.data;

          if (_self.form.data.dob) {

            _self.form.data.dob =
              new Date(_self.form.data.dob)
                .toISOString()
                .split('T')[0];

          }


        } else {

          _self.form.error = true;
          _self.form.message = res.result.message;

        }
      }
    );
  }

  myProfile(): void {

    var _self = this;

    this.serviceLocator.httpService.post(
      'http://localhost:8080/User/myProfile',
      this.form.data,
      function (res: any) {

        _self.form.message = '';
        _self.form.inputerror = {};
        _self.form.error = false;

        if (res.success) {

          _self.form.message = res.result.message;
          _self.form.data.id = res.result.data;
          _self.display();

        } else {

          _self.form.error = true;

          if (res.result.inputerror) {
            _self.form.inputerror = res.result.inputerror;
          }

          _self.form.message = res.result.message;
        }
      }
    );
  }
  setDefaultImage(event: Event): void {

    const img = event.target as HTMLImageElement;

    if (!img.src.endsWith('/assets/files/default.jpg')) {

      img.src = 'assets/images/default.jpg';

    }
  }

}
