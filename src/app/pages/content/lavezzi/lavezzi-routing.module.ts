import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavezziPage } from './lavezzi.page';

const routes: Routes = [
  {
    path: '',
    component: LavezziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavezziPageRoutingModule {}
