import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DrawParticipationComponent} from './draw-participation.component';

const routes: Routes = [{path: ':id', component: DrawParticipationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawParticipationRoutingModule {
}
