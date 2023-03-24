import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RioothonpalacePageRoutingModule } from './rioothonpalace-routing.module';

import { RioothonpalacePage } from './rioothonpalace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RioothonpalacePageRoutingModule
  ],
  declarations: [RioothonpalacePage]
})
export class RioothonpalacePageModule {}
