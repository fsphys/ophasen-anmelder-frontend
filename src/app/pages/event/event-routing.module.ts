import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from './event.component';

const routes: Routes = [{path: ':id', component: EventComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
