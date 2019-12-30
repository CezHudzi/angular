import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-intel-browser',
  templateUrl: './intel-browser.component.html',
  styleUrls: ['./intel-browser.component.css']
})
export class IntelBrowserComponent implements OnInit {


  source: SafeResourceUrl = null;
  options = [
    {name: 'ESA', url: 'http://www.esa.int/ESA'},
    {name: 'POLSA', url: 'https://www.polsa.gov.pl/pl'}
  ];

  constructor(private sanitizer: DomSanitizer) { }



  ngOnInit() {
  }


  selectSource(value: string) {
    this.source = value ? this.sanitizer.bypassSecurityTrustResourceUrl(value) : null; }


}
