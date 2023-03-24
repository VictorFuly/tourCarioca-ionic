import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcoslapaPage } from './arcoslapa.page';

const routes: Routes = [
  {
    path: '',
    component: ArcoslapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcoslapaPageRoutingModule {}
