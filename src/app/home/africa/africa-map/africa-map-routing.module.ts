import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfricaMapPage } from './africa-map.page';

const routes: Routes = [
  {
    path: '',
    component: AfricaMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfricaMapPageRoutingModule {}
