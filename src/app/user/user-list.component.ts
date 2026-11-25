import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent extends BaseListCtl {        
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
      }
    
    setDefaultImage(event: Event): void {

  const img = event.target as HTMLImageElement;

  if (!img.src.endsWith('/assets/files/default.jpg')) {

    img.src = 'assets/images/default.jpg';

  }
}
    
    }
