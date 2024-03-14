import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ChartService } from '@services/chart.service';


@Component({
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit{
  public chart = inject(ChartService)
  
  ngOnInit(): void {
    this.chart.createChart();
  }

}
