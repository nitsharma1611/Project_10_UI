
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaterangeService {

  // Common date formatter
  formatDate(date: Date): string {
    return date.getFullYear() + '-' +
      String(date.getMonth() + 1).padStart(2, '0') + '-' +
      String(date.getDate()).padStart(2, '0');
  }

  // Joining Date: Last 30 years
  getJoiningDateRange() {

    let today = new Date();

    let minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 30);

    return {
      min: this.formatDate(minDate),
      max: this.formatDate(today)
    };
  }

  // DOB: Minimum 18 years age
  getDOBMaxDate(): string {

    let today = new Date();

    let maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() - 18);

    return this.formatDate(maxDate);
  }

}