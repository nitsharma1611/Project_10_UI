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

  fileToUpload: File | null = null;
  imagePreview: any = null;
  maxDOB: string = '';

  constructor(
    private locator: ServiceLocatorService,
    route: ActivatedRoute,
    private httpClient: HttpClient,
    private dateRangeService: DaterangeService
  ) {
    super(locator.endpoints.USER, locator, route);
  }

  // DOB Date Range
  override ngOnInit(): void {

    // Parent BaseCtl initialization
    super.ngOnInit();

    // Minimum 18 Years Age
    this.maxDOB = this.dateRangeService.getDOBMaxDate();

  }

  // FILE SELECT + PREVIEW
  onFileSelect(files: FileList | null) {

    if (!files || files.length === 0) {
      console.log('No file selected');
      return;
    }

    this.fileToUpload = files.item(0);

    if (this.fileToUpload) {

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };

      reader.readAsDataURL(this.fileToUpload);
    }

    console.log('file === ', this.fileToUpload);
  }

  // IMAGE UPLOAD
  onUpload() {

    this.submit((id: any) => {

      if (id) {
        this.myFile();
      }

    });
  }

  // IMAGE UPLOAD METHOD
  myFile() {

    if (!this.fileToUpload) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    this.httpClient
      .post(
        'http://localhost:8080/User/profilePic/' + this.form.data.id,
        formData
      )
      .subscribe(
        (data: any) => {
          console.log('Upload Success:', data);
        },
        (error: any) => {
          console.log('Upload Error:', error);
        }
      );
  }

}