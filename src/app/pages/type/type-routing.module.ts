import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TypeComponent} from './type.component';

const routes: Routes = [{path: ':id', component: TypeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRoutingModule {
}
