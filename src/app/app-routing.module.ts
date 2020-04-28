import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';


const routes: Routes = [
  {path:'observales', component: ObservableComponent,children:[
    {path:'list',component: ListComponent},
    {path:'',component:FromEventComponent},
    {path:'interval',component:IntervalComponent}
  ]},
  {path:'**', component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
