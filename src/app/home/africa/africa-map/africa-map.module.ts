import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfricaMapPageRoutingModule } from './africa-map-routing.module';

import { AfricaMapPage } from './africa-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfricaMapPageRoutingModule
  ],
  declarations: [AfricaMapPage]
})
export class AfricaMapPageModule {}
