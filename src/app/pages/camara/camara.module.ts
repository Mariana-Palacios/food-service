import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CamaraPage } from './camara.page';

import { CamaraPageRoutingModule } from './camara-routing.module';
import { MenuComponentModule } from '@components/menu-card/menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuComponentModule,
    CamaraPageRoutingModule,
  ],
  declarations: [CamaraPage]
})
export class CamaraPageModule {}
