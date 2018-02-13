import { Component, OnInit, ElementRef } from '@angular/core';
import * as D3 from 'd3/index';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  errorMessage: string;
  host;
  svg;

  constructor(private _element: ElementRef) {
    this.host = D3.select(this._element.nativeElement);
   }

  ngOnInit() {
    // this.buildSVG();
  }
  buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', '600')
      .attr('height', '400')
      .style('background-color', 'blue');
}
}
