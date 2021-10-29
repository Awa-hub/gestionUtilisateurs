import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OubliePage } from './oublie.page';

const routes: Routes = [
  {
    path: '',
    component: OubliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OubliePageRoutingModule {}
