

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradiesComponent } from './tradies.component';



const routes: Routes = [{ path: '', component: TradiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradiesRoutingModule { }

