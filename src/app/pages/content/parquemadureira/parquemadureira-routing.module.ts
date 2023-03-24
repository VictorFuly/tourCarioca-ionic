import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquemadureiraPage } from './parquemadureira.page';

const routes: Routes = [
  {
    path: '',
    component: ParquemadureiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquemadureiraPageRoutingModule {}
