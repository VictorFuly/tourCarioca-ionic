import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CristoPage } from './cristo.page';

const routes: Routes = [
  {
    path: '',
    component: CristoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CristoPageRoutingModule {}
