import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservahoraPageRoutingModule } from './reservahora-routing.module';

import { ReservahoraPage } from './reservahora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservahoraPageRoutingModule
  ],
  declarations: [ReservahoraPage]
})
export class ReservahoraPageModule {}
