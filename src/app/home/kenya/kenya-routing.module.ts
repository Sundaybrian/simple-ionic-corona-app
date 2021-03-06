import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KenyaPage } from './kenya.page';

const routes: Routes = [
  {
    path: '',
    component: KenyaPage
  },
  {
    path: 'kenya-map',
    loadChildren: () => import('./kenya-map/kenya-map.module').then( m => m.KenyaMapPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KenyaPageRoutingModule {}
