import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserivceService {

  constructor() { }
  print(countVal,counterId) {
    //  fromEvent(this.prabinBtn.nativeElement,'click').subscribe(prabinResult=>{
    //    console.log("prabinResult");
    //  })
     let el = document.createElement('li');
     el.innerText = countVal;
     document.getElementById(counterId).appendChild(el);
     let dl = document.createElement('li');
    //  dl.innerText = countVal;
    //  document.getElementById('prabinContainer').appendChild(dl);
   }
}
