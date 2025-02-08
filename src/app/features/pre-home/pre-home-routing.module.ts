import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreHomePage } from './pre-home.page';

const routes: Routes = [
  {
    path: '',
    component: PreHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreHomePageRoutingModule {}
