import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { GlobalserivceService } from 'src/app/apservices/globalserivce.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  videoSubscription: Subscription;
  constructor(private _globalService: GlobalserivceService
    ) { }

  ngOnInit(): void {
    //const broadCastVideos = interval(2000)
    //timer(delay,interval)
    const broadCastVideos =timer(1000,2000);
    broadCastVideos.subscribe(res =>{
      console.log(res);
      this.obsMsg = 'Video'+ res;
      this._globalService.print(this.obsMsg,'elContainer');
      this._globalService.print(this.obsMsg,'elContainer1');
      this._globalService.print(this.obsMsg,'elContainer2');

      if(res >=5) {
        this.videoSubscription.unsubscribe()
      }
      

    })
  }

}
