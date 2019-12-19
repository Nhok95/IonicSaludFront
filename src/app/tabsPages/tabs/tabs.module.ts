import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { PasosPageModule } from 'src/app/pages/pasos/pasos.module';
import { BpmsPageModule } from 'src/app/pages/bpms/bpms.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    PasosPageModule,
    BpmsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
