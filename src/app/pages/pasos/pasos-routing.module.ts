import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasosPage } from './pasos.page';

const routes: Routes = [
  {
    path: '',
    component: PasosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasosPageRoutingModule {}
