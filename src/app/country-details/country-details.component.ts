import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements DoCheck {
  ItemsArray = [];
  @Input() detail;
  constructor() {
  }
  ngDoCheck() {
      document.getElementById('imageFlag').setAttribute('href',this.detail.flag);
  }


}
