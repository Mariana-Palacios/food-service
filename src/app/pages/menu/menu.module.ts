import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuPage } from './menu.page';

import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuComponentModule } from '@components/menu-card/menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    MenuComponentModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
