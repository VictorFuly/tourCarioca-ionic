import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaracanaPageRoutingModule } from './maracana-routing.module';

import { MaracanaPage } from './maracana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaracanaPageRoutingModule
  ],
  declarations: [MaracanaPage]
})
export class MaracanaPageModule {}
