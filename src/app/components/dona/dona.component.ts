import { Component, Input, OnInit } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: [],
})
export class DonaComponent implements OnInit {
  @Input() title: string = 'Sin titulo';
  @Input() labels: string[] = ['label 1', 'label 2', 'label 3'];
  @Input() data: number[] = [100, 25, 25];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        backgroundColor: ['#9E120E', '#FF5800', '#FFB414'],
      },
    ],
  };

  ngOnInit() {
    this.doughnutChartData.labels = this.labels;
    this.doughnutChartData.datasets[0].data = this.data;
  }
}
