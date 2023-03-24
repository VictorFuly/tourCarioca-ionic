import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquemadureiraPageRoutingModule } from './parquemadureira-routing.module';

import { ParquemadureiraPage } from './parquemadureira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquemadureiraPageRoutingModule
  ],
  declarations: [ParquemadureiraPage]
})
export class ParquemadureiraPageModule {}
