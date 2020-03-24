import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KenyaMapPageRoutingModule } from './kenya-map-routing.module';

import { KenyaMapPage } from './kenya-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KenyaMapPageRoutingModule
  ],
  declarations: [KenyaMapPage]
})
export class KenyaMapPageModule {}
