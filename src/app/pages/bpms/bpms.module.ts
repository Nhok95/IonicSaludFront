import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpmsPageRoutingModule } from './bpms-routing.module';

import { BpmsPage } from './bpms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpmsPageRoutingModule
  ],
  declarations: [BpmsPage]
})
export class BpmsPageModule {}
