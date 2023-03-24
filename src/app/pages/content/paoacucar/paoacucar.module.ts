import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaoacucarPageRoutingModule } from './paoacucar-routing.module';

import { PaoacucarPage } from './paoacucar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaoacucarPageRoutingModule
  ],
  declarations: [PaoacucarPage]
})
export class PaoacucarPageModule {}
