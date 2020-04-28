import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-student-child',
  templateUrl: './student-child.component.html',
  styleUrls: ['./student-child.component.css']
})
export class StudentChildComponent implements OnInit {
@Input() myinput: string;
@Output() myoutput: EventEmitter<string>= new EventEmitter();
outputstring =" Hi I am Your child";
  constructor() { }

  ngOnInit(): void {
    console.log(this.myinput);
  }

  sendData() {
    this.myoutput.emit(this.outputstring);
  }

}
