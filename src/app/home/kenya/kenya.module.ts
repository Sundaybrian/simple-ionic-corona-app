import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KenyaPageRoutingModule } from './kenya-routing.module';

import { KenyaPage } from './kenya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KenyaPageRoutingModule
  ],
  declarations: [KenyaPage]
})
export class KenyaPageModule {}
