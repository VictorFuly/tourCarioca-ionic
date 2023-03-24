import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RioothonpalacePage } from './rioothonpalace.page';

const routes: Routes = [
  {
    path: '',
    component: RioothonpalacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RioothonpalacePageRoutingModule {}
