import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradiesRoutingModule } from './tradies.routing.module';
import { TradiesComponent } from './tradies.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers/tradie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TradieEffects } from '../store/effects/effects.tradies';


@NgModule({
  declarations: [TradiesComponent],
  imports: [
    CommonModule,
    TradiesRoutingModule,
    SharedModule,
    StoreModule.forFeature('tradies',reducers),
    EffectsModule.forFeature([TradieEffects])
  ]
})
export class TradiesModule { }