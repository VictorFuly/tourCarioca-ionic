import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CristoPageRoutingModule } from './cristo-routing.module';

import { CristoPage } from './cristo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CristoPageRoutingModule
  ],
  declarations: [CristoPage]
})
export class CristoPageModule {}
