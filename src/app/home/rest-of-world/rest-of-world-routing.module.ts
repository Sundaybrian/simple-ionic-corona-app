import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestOfWorldPage } from './rest-of-world.page';

const routes: Routes = [
  {
    path: '',
    component: RestOfWorldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestOfWorldPageRoutingModule {}
