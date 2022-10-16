import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DrawParticipationRoutingModule} from './draw-participation-routing.module';
import {DrawParticipationComponent} from './draw-participation.component';


@NgModule({
  declarations: [
    DrawParticipationComponent
  ],
  imports: [
    CommonModule,
    DrawParticipationRoutingModule
  ]
})
export class DrawParticipationModule {
}
