import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit{

  constructor() { }

  @ViewChild('adBtn') adBtn: ElementRef;
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.adBtn.nativeElement, 'click').subscribe(res => {
      console.log('vedio' + count++);
      this.print();
    })
  }

  print() {
    let el = document.createElement('li');
    el.innerText = 'Uxtrendz';
    document.getElementById('elContainer').appendChild(el);
  }
}
