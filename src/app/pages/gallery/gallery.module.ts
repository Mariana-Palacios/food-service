import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GalleryPage } from './gallery.page';

import { GalleryPageRoutingModule } from './gallery-routing.module';
import { MenuComponentModule } from '@components/menu-card/menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuComponentModule,
    GalleryPageRoutingModule,
  ],
  declarations: [GalleryPage]
})
export class GalleryPageModule {}
