import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    TabsComponent
  ],
  declarations: [TabsComponent]
})
export class TabsComponentModule {}