import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfricaPage } from './africa.page';

const routes: Routes = [
  {
    path: '',
    component: AfricaPage
  },
  {
    path: 'africa-map',
    loadChildren: () => import('./africa-map/africa-map.module').then( m => m.AfricaMapPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfricaPageRoutingModule {}
