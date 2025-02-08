import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PreHomePageRoutingModule } from './pre-home-routing.module';
import { PreHomePage } from './pre-home.page';
import { SharedComponents } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponents,
    PreHomePageRoutingModule
  ],
  declarations: [PreHomePage],
  exports:[]
})
export class PreHomePageModule {}
