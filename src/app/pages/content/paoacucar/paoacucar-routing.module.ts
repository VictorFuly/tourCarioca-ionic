import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaoacucarPage } from './paoacucar.page';

const routes: Routes = [
  {
    path: '',
    component: PaoacucarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaoacucarPageRoutingModule {}
