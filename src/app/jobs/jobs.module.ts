import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './job.component';
import { JobsRoutingModule } from './jobs.routing.module';


@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }