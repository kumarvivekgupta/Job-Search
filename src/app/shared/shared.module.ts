import { NgModule } from '@angular/core';
import { TradieCardComponent } from './tradie-card/tradie-card.component';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card/job-card.component';


@NgModule({
  declarations: [
    TradieCardComponent,
    JobCardComponent
  ],
  imports:[
    CommonModule
  ],
  providers: [],
  exports:[
    TradieCardComponent,
    JobCardComponent
  ]
})
export class SharedModule { }
