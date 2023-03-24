import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaracanaPage } from './maracana.page';

const routes: Routes = [
  {
    path: '',
    component: MaracanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaracanaPageRoutingModule {}
