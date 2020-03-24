import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KenyaMapPage } from './kenya-map.page';

const routes: Routes = [
  {
    path: '',
    component: KenyaMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KenyaMapPageRoutingModule {}
