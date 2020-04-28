import { Component } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxjsSeries';
  appVariable ="Hi I am Dilip Rai From Pathari Sanischare One Morang";

  getdata(value) {
    console.log(value);
  }
}