import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { DaterangeService } from '../daterange.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
 
})
export class EmployeeComponent extends BaseCtl {

minJoiningDate:string='';
maxJoiningDate:string='';

constructor(public locator: ServiceLocatorService,route:  ActivatedRoute, private daterangeService: DaterangeService) {
  super(locator.endpoints.EMPLOYEE , locator, route);
}
override ngOnInit(): void {

    // Parent BaseCtl initialization
    super.ngOnInit();

    // Joining Date range
    let range = this.daterangeService.getJoiningDateRange();

    this.minJoiningDate = range.min;;'l'
    this.maxJoiningDate = range.max;

  }


}
