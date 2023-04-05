import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = ['hijo 1', 'hijo 2', 'hijo 3'];
  public data1 = [100, 50, 300];
}
