import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-metrics',
  templateUrl: './summary-metrics.component.html',
  styleUrls: ['./summary-metrics.component.scss'],
})
export class SummaryMetricsComponent implements OnInit {
  @Input() metrics: object;

  constructor() {}

  ngOnInit(): void {}
}
