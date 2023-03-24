import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavezziPageRoutingModule } from './lavezzi-routing.module';

import { LavezziPage } from './lavezzi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavezziPageRoutingModule
  ],
  declarations: [LavezziPage]
})
export class LavezziPageModule {}
