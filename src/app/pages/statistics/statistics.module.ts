import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StatisticsPage } from './statistics.page';
import { StatisticsPageRoutingModule } from './statistics-routing.module';
import { ComponentsModule } from '@components/components.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StatisticsPageRoutingModule,
    //StatisticsPage,
    ComponentsModule
    //StatisticsPageModule,
  ],
  declarations: [StatisticsPage]
})
export class StatisticsPageModule {}
