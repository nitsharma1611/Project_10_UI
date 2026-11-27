import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DaterangeService } from '../daterange.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent extends BaseCtl {
maxDOB:String ='';




constructor(
    private locator: ServiceLocatorService,
    route: ActivatedRoute,
    private httpClient: HttpClient,private daterangeService:DaterangeService
  ) {
    super(locator.endpoints.USER, locator, route);
  }

override ngOnInit(): void {

    // Parent BaseCtl initialization
    super.ngOnInit();

    // DOB Range
this.maxDOB= this.daterangeService.getDOBMaxDate();


  }

}





