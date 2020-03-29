import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestOfWorldPageRoutingModule } from './rest-of-world-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RestOfWorldPage } from './rest-of-world.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RestOfWorldPageRoutingModule
  ],
  declarations: [RestOfWorldPage]
})
export class RestOfWorldPageModule {}
