import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuPage } from './menu.page';

import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuComponentModule } from '@components/menu-card/menu.module';
import { ModalComponentModule } from '@components/modal/modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    MenuComponentModule,
    ModalComponentModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
