import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OubliePageRoutingModule } from './oublie-routing.module';

import { OubliePage } from './oublie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OubliePageRoutingModule
  ],
  declarations: [OubliePage]
})
export class OubliePageModule {}
