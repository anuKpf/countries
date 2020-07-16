import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GetCountryService } from './services/countries.service';
import { HttpResponse } from '@angular/common/http';
import { RootObject } from './model/RootObject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countries';
  regions: string[] = ['Europe', 'Asia'];
  countries: string[] = [];
  dataAPI = [];
  myGroup;
  detail = {};
  constructor(public fb: FormBuilder, private dataService: GetCountryService) {
    this.myGroup = new FormGroup({
      region: new FormControl(),
      country: new FormControl()
    });
  }

  showCountry(event): void {

    this.dataService.sendGetRequest(event.target.value)
      .subscribe((data: RootObject[]) => {

        this.dataAPI = data;
        this.countries = [];
        data.forEach(element => {

          this.countries.push(element.name);

        });
        window.sessionStorage.setItem('country', JSON.stringify(data));


      });

  }

  showCountryTable(event): void {

    this.dataAPI.forEach(element => {
      if (element.name === event.target.value) {

        this.detail[`name`] = element[`name`];
        this.detail[`capital`] = element[`capital`];
        this.detail[`population`] = element[`population`];
        this.detail[`currencies`] = element[`currencies`];
        this.detail[`flag`] = element[`flag`];
      }

    });


  }
}
