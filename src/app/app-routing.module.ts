import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'type',
    loadChildren: () => import('./pages/type/type.module').then(m => m.TypeModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule)
  },
  {
    path: 'participation',
    loadChildren: () => import('./pages/participation/participation.module').then(m => m.ParticipationModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
