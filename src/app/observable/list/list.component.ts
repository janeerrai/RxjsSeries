import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { GlobalserivceService } from 'src/app/apservices/globalserivce.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit{
 // fromEvent(this.dilipBtn.nativeElement,'click').sub // fromEvent(this.dilipBtn.nativeElement,'click').subscribe(res => {
    //   console.log("vedio1")
    // })scribe(res => {
    //   console.log("vedio1")
    // })
  constructor(private serviceApi: GlobalserivceService) { }
  @ViewChild('dilipBtn') dilipBtn: ElementRef;
  @ViewChild('prabinBtn') prabinBtn: ElementRef;
  ngOnInit(): void {
    // fromEvent(this.dilipBtn.nativeElement,'click').subscribe(res => {
    //   console.log("vedio1")
    // })
  }
 ngAfterViewInit() {
   let count = 1;
   fromEvent(this.dilipBtn.nativeElement,'click').subscribe(res => {
     console.log("res");
     let countVal = 'vedio' + count++
     this.serviceApi.print(countVal,'dilipContainer');
   })
   fromEvent(this.dilipBtn.nativeElement,'click').subscribe(dilip=>{
     console.log("this is Dilip Rai");
   })
 }
 
}
