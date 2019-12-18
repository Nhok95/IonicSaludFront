import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpmsPage } from './bpms.page';

const routes: Routes = [
  {
    path: '',
    component: BpmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpmsPageRoutingModule {}
