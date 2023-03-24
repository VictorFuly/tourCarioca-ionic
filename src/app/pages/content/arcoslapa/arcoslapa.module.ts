import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcoslapaPageRoutingModule } from './arcoslapa-routing.module';

import { ArcoslapaPage } from './arcoslapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcoslapaPageRoutingModule
  ],
  declarations: [ArcoslapaPage]
})
export class ArcoslapaPageModule {}
