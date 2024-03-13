
import { NgModule } from '@angular/core';
import { MenuComponentModule } from './menu-card/menu.module';
import { TabsComponentModule } from './tabs/tabs.module';
import { ModalComponentModule } from './modal/modal.module';
import { IonicModule } from '@ionic/angular';
import { ProgressBarComponentModule } from './progress-bar/progress-bar.module';

@NgModule({
  imports: [
        MenuComponentModule,
        TabsComponentModule,
        ProgressBarComponentModule,
        IonicModule,
  ],
  exports:[
        MenuComponentModule,
        TabsComponentModule,
        ModalComponentModule,
        ProgressBarComponentModule      
  ]
})
export class ComponentsModule { }