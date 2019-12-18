import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasosPageRoutingModule } from './pasos-routing.module';

import { PasosPage } from './pasos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasosPageRoutingModule
  ],
  declarations: [PasosPage]
})
export class PasosPageModule {}
