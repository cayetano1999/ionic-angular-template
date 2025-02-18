import { Component } from '@angular/core';

@Component({
    selector: 'app-pre-home',
    templateUrl: './pre-home.page.html',
    styleUrls: ['./pre-home.page.scss'],
    standalone: false
})
export class PreHomePage {
  value = 90;
  constructor() { }
}
